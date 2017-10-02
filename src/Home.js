import React, { Component } from 'react'
import AgencyForm from './AgencyForm'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      showReg: false,
      newAgency: {
        name: '',
        city: '',
        country: '',
        contact_name: '',
        contact_phone: '',
        contact_email: ''
      }
    }
  }

  login(){
    if (this.props.appContext.userAccount == null){
      console.log('Show user error about metamask account');
      return;
    }
    let smartContract = this.props.appContext.handshakeContractInstance;

    smartContract.isRegistered.call(this.props.appContext.userAccount)
      .then(registered => {
        if (!registered){
          this.setState({
            showReg: true
          });
          return;
        }
        smartContract.getAgencyData(this.props.appContext.userAccount)
        .then(result => console.log(result));
      })
  }

  // Register current user as agency if not already registered. Can improve in future
  registerAgency(){
    const agencyJson = JSON.stringify(this.state.newAgency);
    this.appContext.handshakeContractInstance
      .registerAgency(this.appContext.userAccount, agencyJson, {from: this.appContext.userAccount})
      .then(result => console.log(result));
  }

  handleInputChange(event){
    let newAgency = this.state.newAgency;
    newAgency[event.target.id] = event.target.value;
    this.setState({
      newAgency: newAgency
    });
  }

  render(){
    return (
      <div>
        {this.state.showReg
        ? <AgencyForm newAgency={this.state.newAgency} handleInputChange={(e) => this.handleInputChange(e)} registerAgency={() => this.registerAgency()}  />
        : <p onClick={() => this.login()}>Log In As Agency</p>}
      </div>
    );
  }

}

export default Home
