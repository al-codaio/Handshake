import React, { Component } from 'react'
import { Connect } from 'uport-connect'
import Handshake from './contracts/Handshake.json'
import getWeb3 from './utils/getWeb3';
import Dashboard from './Dashboard';
import NewContract from './NewContract';
import NewAgency from './NewAgency';
import ViewContract from './ViewContract';
import Home from './Home';
import Agency from './Agency';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


class HandshakeApp extends Component {

  constructor(props){
    super(props);

    this.appContext = {
      uport: null,
      uPortWeb3: null,
      web3: null,
      handshakeContractInstance: null,
      userAccount: null,
      userDetails: null
    };

    this.state = {
      contracts: [
      ]
    }
  }

  componentWillMount(){
    getWeb3
    .then(results => {
      this.appContext.web3 = results.web3;
      this.setupContractInstance();
      const uPort = new Connect('MyDApp');
      this.appContext.uPort = uPort;
      this.appContext.uPortWeb3 = uPort.getWeb3(); // in end may not need both but is easier for now
    })
    .catch((e) => {
      console.log('Error finding web3.', e)
    })
  }

  setupContractInstance(){
    const contract = require('truffle-contract')
    const handshake = contract(Handshake)
    handshake.setProvider(this.appContext.web3.currentProvider)
    this.appContext.web3.eth.getAccounts((error, accounts) => {
      this.appContext.userAccount = accounts[0];
      handshake.deployed().then((instance) =>{
          this.appContext.handshakeContractInstance = instance;
          this.setupContractListeners(this);
          //this.registerAgency();
      });
    });
  }

  setupContractListeners(component){
    this.appContext.handshakeContractInstance
    .LogLaborContractCreated(null, { fromBlock: 0, toBlock: 'latest', agency: this.appContext.userAccount }).watch(function(err, result){
      if (err) {
        console.log(err);
        return;
      }
      console.log('contract created from: ', result.args.agency);
      console.log('contract at address: ', result.args.atAddress);
      console.log('contract created with data: ', result.args.data);
      let contract = JSON.parse(result.args.data);
      contract.address = result.args.atAddress;
      component.setState({
        contracts: component.state.contracts.concat([contract])
      });
    })
  }

  setUserDetails(userDetails){
    this.appContext.userDetails = userDetails;
  }

  render(){
    return(
      <div>
        <Router>
          <div>
            <Header appContext={this.Header} />
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} setUserDetails={(userDetails) => this.setUserDetails(userDetails)} appContext={this.appContext}/>}/>
              <Route exact path='/dashboard' render={() => <Dashboard appContext={this.appContext} contracts={this.state.contracts}/>}/>
              <Route exact path='/contract/new' render={(props) => <NewContract {...props} appContext={this.appContext} />} />
              <Route exact path='/agency/new' render={() => <NewAgency appContext={this.appContext} />} />
              <Route exact path='/identity' component={Agency}/>
              <Route path='/contract/:address' render={(props) => <ViewContract {...props} appContext={this.appContext} contracts={this.state.contracts} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}

export default HandshakeApp
