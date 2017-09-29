import React, { Component } from 'react';
import style from './style/style';
import marked from 'marked';

class Agency extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toBeUpdated: false,
      name: '', 
      city: '', 
      country: '', 
      contact_name: '', 
      contact_phone: '', 
      contact_email: '' 
    };
    
    // this.deleteComment = this.deleteComment.bind(this);
    // this.updateComment = this.updateComment.bind(this);
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }
  // updateComment(e) {
  //   e.preventDefault();
  //   this.setState({ toBeUpdated: !this.state.toBeUpdated });
  // }
  // handleCommentUpdate(e) {
  //   e.preventDefault();
  //   let id = this.props.uniqueID;
  //   let author = (this.state.author) ? this.state.author : null;
  //   let text = (this.state.text) ? this.state.text : null;
  //   let comment = { author: author, text: text};
  //   this.props.onCommentUpdate(id, comment);
  //   this.setState({
  //     toBeUpdated: !this.state.toBeUpdated,
  //     author: '',
  //     text: ''
  //   })
  // }
  // deleteComment(e) {
  //   e.preventDefault();
  //   let id = this.props.uniqueID;
  //   this.props.onCommentDelete(id);
  //   console.log('oops deleted');
  // }
  // handleTextChange(e) {
  //   this.setState({ text: e.target.value });
  // }
  // handleAuthorChange(e) {
  //   this.setState({ author: e.target.value });
  // }
  // rawMarkup() {
  //   let rawMarkup = marked(this.props.children.toString());
  //   return { __html: rawMarkup };
  // }
  render() {
    return (
      <div style={ style.agency }>
        <h3>{this.props.name}</h3>
        <table>
          <tbody>
            <tr>
              <th style={ style.headers }>ID</th>
              <th style={ style.headers }>City</th>
              <th style={ style.headers }>Country</th>
              <th style={ style.headers }>Contact Name</th>
              <th style={ style.headers }>Contact Phone</th>
              <th style={ style.headers }>Contact E-mail</th>
            </tr>
            <tr>
              <td style={ style.headers }>{this.props.uniqueID}</td>
              <td style={ style.headers }>{this.props.city}</td>
              <td style={ style.headers }>{this.props.country}</td>
              <td style={ style.headers }>{this.props.contact_name}</td>
              <td style={ style.headers }>{this.props.contact_phone}</td>
              <td style={ style.headers }>{this.props.contact_email}</td>
            </tr>
          </tbody>
        </table>   

      </div>
    )
  }
}

export default Agency;