import React, { Component } from 'react';
import LaborContract from './contracts/LaborContract.json'
import style from './style/contracts';

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
        <div style={ style.contractView }>
          <div className="container">
            <div className="col-md-12" style={ style.contractDataBox }>
              <h1>
                {contract.name}
              </h1>
              <h3>Status: Unsigned</h3>

                <div className="clearfix" style={ style.contractSpacing }>
                  <div className="col-md-2"> Agency:</div>
                  <div className="col-md-10"><button style={ style.secondaryBtn } onClick={() => this.signContract()}>Sign</button></div>
                </div>

                <div className="clearfix" style={ style.contractSpacing }>
                  <div className="col-md-2">Employee:</div>
                  <div className="col-md-10"><button style={ style.secondaryBtn } onClick={() => this.signContract()}>Sign</button></div>
                </div>

                <div className="clearfix" style={ style.contractSpacing }>
                  <div className="col-md-2">Job Site:</div>
                  <div className="col-md-10"><button style={ style.secondaryBtn } onClick={() => this.signContract()}>Sign</button></div>
                </div>
            </div>

            <div className="col-md-12" style={Object.assign({}, style.contractDataBox, style.boxBlueTop)}>
              <h3 style={ style.blueBoxHeader }>Contract Details</h3>

              <div className="clearfix" style={ style.contractSpacing }>
                <div className="col-md-3">Contract Address:</div>
                <div className="col-md-9">{contract.address}</div>
              </div>

              <div className="clearfix" style={ style.contractSpacing }>
                <div className="col-md-3">Position:</div>
                <div className="col-md-9">{contract.type}</div>
              </div>

              <div className="clearfix" style={ style.contractSpacing }>
                <div className="col-md-3">Site of Employment:</div>
                <div className="col-md-9">{contract.site}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default ViewContract;
