import React, { Component } from 'react';
import { MNID } from 'uport-connect'
import LaborContract from './contracts/LaborContract.json'

class ViewContract extends Component {

    constructor(props){
      super(props)

      this.state = {
        uPortUser: null,
        signees: []
      };
    }

    componentWillMount(){
      this.setupContractInstance();
    }

    setupContractInstance(){
      const contract = require('truffle-contract')
      const laborContract = contract(LaborContract)
      laborContract.setProvider(this.props.appContext.web3.currentProvider)
      laborContract.at(this.props.match.params.address)
        .then(instance => this.setupEventListeners(instance));
    }

    setupEventListeners(instance){
      let component = this;
      instance.LogContractSigned(null, { fromBlock: 0, toBlock: 'latest'}).watch(function(err, result){
        if (err) {
          console.log(err);
          return;
        }
        console.log('contract was signed');
        let signee = JSON.parse(result.args.data);
        signee.address = result.args.signee;
        component.setState({
          signees: component.state.signees.concat([signee])
        });
      });
    }

    // blah not best way of doing this - should probably store by key. TODO
    getContract(){
      let contractAddress = this.props.match.params.address;
      for(let i=0; i< this.props.contracts.length; i++){
        if (this.props.contracts[i].address == contractAddress)
          return this.props.contracts[i];
      }
    }

    loginUport(){
      this.props.appContext.uPort.requestCredentials().then((userProfile) => {
        console.log(userProfile); // note that to get avatar we need to have an app registered
         this.setState({
           uPortUser: {
             name: userProfile.name,
             //country: userProfile.country,
             address: userProfile.address,
             rinkebyAddress: MNID.decode(userProfile.address).address
           }
         })
      })
    }

    signContract(){
      let laborContractABI = this.props.appContext.uPortWeb3.eth.contract(LaborContract.abi)
      let laborContractObj = laborContractABI.at(this.props.match.params.address)
      laborContractObj.sign(JSON.stringify(this.state.uPortUser), (error, txHash) => {
        if (error) { throw error }
          this.waitForMined(txHash, { blockNumber: null }, // see next area
          function pendingCB () {
            // Signal to the user you're still waiting
            // for a block confirmation
            console.log('pending');
          },
          function successCB (data) {
            // Great Success!
            // Likely you'll call some eventPublisherMethod(txHash, data)
            console.log('success');
          }
        )
      })
    }

    waitForMined(txHash, response, pendingCB, successCB){
      let component = this;
      if (response.blockNumber) {
        successCB()
      } else {
        pendingCB()
          component.pollingLoop(txHash, response, pendingCB, successCB)
      }
    }

    // Recursive polling to do continuous checks for when the transaction was mined
    pollingLoop(txHash, response, pendingCB, successCB){
      let component = this;
      setTimeout(function () {
        component.props.appContext.uPortWeb3.eth.getTransaction(txHash, (error, response) => {
          if (error) { throw error }
            if (response === null) {
              response = { blockNumber: null }
            } // Some ETH nodes do not return pending tx
            component.waitForMined(txHash, response, pendingCB, successCB)
        })
      }, 1000) // check again in one sec.
    }

    render(){
      let contract = this.getContract();
      return (
        <div>
          <h2>Will be a page to view and allow future employees to sign contracts</h2>
          {this.state.uPortUser
            ? <div>
              <h4>Logged in as:</h4>
                <p>
                  Name: {this.state.uPortUser.name}
                </p>
                <p>
                  Country: {this.state.uPortUser.country}
                </p>
                <p>
                  uPort Address: {this.state.uPortUser.address}
                </p>
                <p>
                  Rinkeby Address :{this.state.uPortUser.rinkebyAddress}
                </p>
            </div>
            : null}
          <div>
            <h3>Signees</h3>
            <ul>
              {this.state.signees.map((signee, index) => <li key={index}>
                {signee.name}
                {signee.address}
                {signee.rinkebyAddress}
              </li>)}
            </ul>
          </div>
          <h4>Contract</h4>
          <p>
            {contract.name}
          </p>
          <p>
            {contract.address}
          </p>
          <p>
            {contract.type}
          </p>
          <p>
            {contract.site}
          </p>
          <p>
            {contract.vacation}
          </p>
          <p>
            {contract.sick}
          </p>
          <p>
            {contract.food}
          </p>
          <p>
            {contract.transport}
          </p>
          <p>
            {contract.housing}
          </p>
          {this.state.uPortUser
          ? <button onClick={() => this.signContract()}>Sign</button>
          : <button onClick={() => this.loginUport()}>Log in with uPort</button>}
        </div>
      );
    }
}

export default ViewContract;
