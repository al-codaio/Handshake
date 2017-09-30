import React, { Component } from 'react';

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
      // TODO: Add uPort here! Can use eth address for now
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
        </div>
      );
    }
}

export default ViewContract;
