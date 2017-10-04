import React, { Component } from 'react';
import style from './style/style';
import marked from 'marked';

class Agency extends Component {

  render() {
    return (
      <div style={ style.agency }>
        <div className="container">
          <div className="col-md-12" style={ style.agencyDataBox }>
            <div className="row">
              <div className="col-md-2">
                <img style={ style.profilePicture } src={require('./img/staffhouse-logo.png')} />
              </div>

              <div className="col-md-7">
                <h1>Agency Name</h1>
                <p><img src={require('./img/check.png')} /> verified by the POEA</p>
                <p><img src={require('./img/check.png')} /> verified by the IOM as an <strong>Ethical Organization</strong></p>
                <p><a href="#">Add verification</a></p>
                <p style={ style.agencyDescription }>An 100% Filipino-owned corporation, Staffhouse International Resources has been recruiting top-level professionals since its inception in 1999. Within a mere few years, Staffhouse has become an industry leader, gaining the trust of both workforce candidates and the world’s biggest companies.</p>
              </div>

              <div className="col-md-3">
                <ul style={ style.contactInfo }>
                  <li>Id</li>
                  <li>City</li>
                  <li>Country</li>
                  <li>Contact Name</li>
                  <li>Contact Phone</li>
                  <li>Email</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12" style={Object.assign({}, style.agencyDataBox, style.agencyDataBoxBlueTop)}>
            <h3 style={ style.agencyBoxHeader }>
              Assessments
            </h3>

            <p><a href="#">IOM Gender Sensitivity</a> (not started)</p>
          </div>

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
      </div>
    )
  }
}

export default Agency;
