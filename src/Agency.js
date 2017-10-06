import React, { Component } from 'react';
import style from './style/style';
import Face from 'react-icons/lib/md/face'
import City from 'react-icons/lib/md/location-city'
import LocationPoint from 'react-icons/lib/md/location-on'
import Mail from 'react-icons/lib/md/email'
import Phone from 'react-icons/lib/md/local-phone'

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
                <h1>{this.props.appContext.userDetails.name}</h1>
                <p><img alt="Verification tick" src={require('./img/check.png')} /> verified by the POEA</p>
                <p><img alt="Verification tick" src={require('./img/check.png')} /> verified by the IOM as an <strong>Ethical Organization</strong></p>
                <p><a href="#add-verification">Add verification</a></p>
                <p style={ style.agencyDescription }>An 100% Filipino-owned corporation, Staffhouse International Resources has been recruiting top-level professionals since its inception in 1999. Within a mere few years, Staffhouse has become an industry leader, gaining the trust of both workforce candidates and the world’s biggest companies.</p>
              </div>

              <div className="col-md-3">
                <ul style={ style.contactInfo }>
                  <li>{this.props.appContext.userAccount.substr(0,8) + '...'}</li>
                  <li><City />{this.props.appContext.userDetails.city}</li>
                  <li><LocationPoint /> {this.props.appContext.userDetails.country}</li>
                  <li><Face /> {this.props.appContext.userDetails.contact_name}</li>
                  <li><Phone /> {this.props.appContext.userDetails.contact_phone}</li>
                  <li><Mail /> {this.props.appContext.userDetails.contact_email}</li>
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
