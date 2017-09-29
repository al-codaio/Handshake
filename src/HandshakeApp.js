import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import Contracts from './Contracts';
import Dashboard from './Dashboard';
import Header from './Header';

class HandshakeApp extends Component {

  componentWillMount(){
    console.log('Get web3 here')
  }

  render(){
    return(
      <div>
        <Header />
        <Dashboard />
        <Contracts />
        <CommentBox
            url='http://localhost:3001/api/comments'
            pollInterval={2000} />
      </div>
    );
  }

}

export default HandshakeApp
