import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Handshake from './contracts/Handshake.json'
import getWeb3 from './utils/getWeb3';
import CommentBox from './CommentBox';
import Contracts from './Contracts';
import Dashboard from './Dashboard';
import Header from './Header';
import NewContract from './NewContract';
import Identity from './Identity';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


class HandshakeApp extends Component {

  constructor(props){
    super(props);

    this.appContext = {
      web3: null,
      handshakeContractInstance: null,
      userAccount: null
    };

    this.state = {
      contracts: []
    }
  }

  componentWillMount(){
    getWeb3
    .then(results => {
      this.appContext.web3 = results.web3;
      this.setupContractInstance();
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  setupContractInstance(){
    const contract = require('truffle-contract')
    const handshake = contract(Handshake)
    handshake.setProvider(this.appContext.web3.currentProvider)

    this.appContext.web3.eth.getAccounts((error, accounts) => {
      this.appContext.userAccount = accounts[0];
      return handshake.deployed();
    }).then(instance =>{
      this.appContext.handshakeContractInstance = instance;
      this.setupContractListeners(this);
    });
  }

  setupContractListeners(component){
    this.appContext.handshakeContractInstance
    .LogLaborContractCreated(null, { fromBlock: 0, toBlock: 'latest' }).watch(function(err, result){
      if (err) {
        console.log(err);
        return;
      }
      console.log('contract created from: ', result.args.agency);
      console.log('contract at address: ', result.args.atAddress);
      console.log('contract created with data: ', result.args.data);
      // TODO: use to update state
    })
  }

  registerAgency(){
    // TODO: Interact with instance to register current address as agency
  }

  createContract(){
    // TODO: Interact with instance to create new labor contract
  }

  render(){
    return(
      <div>
        <Router>
          <div>
            <Header />

            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/contract/new' component={NewContract}/>
              <Route exact path='/identity' component={Identity}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}

export default HandshakeApp
