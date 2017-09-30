import React, { Component } from 'react';
import LaborContract from './contracts/LaborContract.json'

class ViewContract extends Component {

    // blah not best way of doing this - should probably store by key. TODO
    getContract(){
      let contractAddress = this.props.match.params.address;
      for(let i=0; i< this.props.contracts.length; i++){
        if (this.props.contracts[i].address == contractAddress)
          return this.props.contracts[i];
      }
    }

    signContract(){
      let laborContractABI = this.props.appContext.uPortWeb3.eth.contract(LaborContract.abi)
      let laborContractObj = laborContractABI.at(this.props.match.params.address)
      laborContractObj.sign((error, txHash) => {
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
            console.log('Success');
            console.log('Made it');
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
          <button onClick={() => this.signContract()}>Sign</button>
        </div>
      );
    }
}

export default ViewContract;
