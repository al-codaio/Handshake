import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import NewContract from './NewContract';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


class HandshakeApp extends Component {

  componentWillMount(){
    console.log('Get web3 here')
  }

  render(){
    return(
      <div>
        <Header />

        <Router>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/contract/new' component={NewContract}/>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default HandshakeApp
