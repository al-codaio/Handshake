import React, { Component } from 'react';
import Agency from './Agency';
import style from './style/style';

class AgencyList extends Component {
  render() {
    let agencyNodes = this.props.data.map(agency => {
      return (
        <Agency
          uniqueID={ agency['_id'] }
          name={ agency.name }
          city={ agency.city }
          country={ agency.country }
          contact_name={ agency.contact_name }
          contact_phone={ agency.contact_phone }
          contact_email={ agency.contact_email }
          
          // onCommentDelete={ this.props.onCommentDelete }
          // onCommentUpdate={ this.props.onCommentUpdate }
          key={ agency['_id'] }>
        </Agency>
      )
    })
    return (
      <div style={ style.agencyList }>
        { agencyNodes }
      </div>
    )
  }
}

export default AgencyList;