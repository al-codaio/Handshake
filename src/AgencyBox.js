import React, { Component } from 'react';
import axios from 'axios';
import AgencyList from './AgencyList';
import AgencyForm from './AgencyForm';
import style from './style/style';

class AgencyBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadAgenciesFromServer = this.loadAgenciesFromServer.bind(this);
    this.handleAgencySubmit = this.handleAgencySubmit.bind(this);
    // this.handleCommentDelete = this.handleCommentDelete.bind(this);
    // this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }
  loadAgenciesFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handleAgencySubmit(agency) {
    let agencies = this.state.data;
    agency.id = Date.now();
    let newAgencies = agencies.concat([agency]);
    this.setState({ data: newAgencies });
    axios.post(this.props.url, agency)
      .catch(err => {
        console.error(err);
        this.setState({ data: agencies });
      });
  }
  
  //handle delete and update functions

  // handleCommentDelete(id) {
  //   axios.delete(`${this.props.url}/${id}`)
  //     .then(res => {
  //       console.log('Comment deleted');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }
  // handleCommentUpdate(id, comment) {
  //   //sends the comment id and new author/text to our api
  //   axios.put(`${this.props.url}/${id}`, comment)
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  componentDidMount() {
    this.loadAgenciesFromServer();
    setInterval(this.loadAgenciesFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div style={ style.agencyBox }>
        <AgencyForm onAgencySubmit={ this.handleAgencySubmit }/>
        <br></br>
        <AgencyList data={ this.state.data }/>
      </div> 
    )
  }
}

export default AgencyBox;