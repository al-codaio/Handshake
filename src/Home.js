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

  loginOrRegister(){
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
        this.login();
      })
  }

  login(){
    let smartContract = this.props.appContext.handshakeContractInstance;
    smartContract.getAgencyData.call(this.props.appContext.userAccount)
      .then(data => {
        var obj = JSON.parse(data);
        this.props.setUserDetails(obj);
        this.props.history.push('/dashboard');
      })
  }

  register(){
    const agencyJson = JSON.stringify(this.state.newAgency);
    this.props.appContext.handshakeContractInstance
      .registerAgency(this.props.appContext.userAccount, agencyJson, {from: this.props.appContext.userAccount, gas: 4000000})
      .then(result => this.login());
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
        ? <AgencyForm newAgency={this.state.newAgency} handleInputChange={(e) => this.handleInputChange(e)} registerAgency={() => this.register()}  />
        : <div className="button-centre" onClick={() => this.loginOrRegister()}><p>Log In / Register</p></div>}
      </div>
    );
  }

}

export default Home
