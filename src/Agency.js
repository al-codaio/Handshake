import React, { Component } from 'react';
import style from './style/style';

class Agency extends Component {

  render() {
    return (
      <div style={ style.agency }>
        <div className="container">
          <div className="col-md-12" style={ style.agencyDataBox }>
            <div className="row">
              <div className="col-md-2">
                <img alt="Agency logo" style={ style.profilePicture } src={require('./img/staffhouse-logo.png')} />
              </div>

              <div className="col-md-7">
                <h1>Agency Name</h1>
                <p><img alt="Verification tick" src={require('./img/check.png')} /> verified by the POEA</p>
                <p><img alt="Verification tick" src={require('./img/check.png')} /> verified by the IOM as an <strong>Ethical Organization</strong></p>
                <p><a href="#add-verification">Add verification</a></p>
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

            <p><a href="#gender-sensitivity">IOM Gender Sensitivity</a> (not started)</p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Agency;
