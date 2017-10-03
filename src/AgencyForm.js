import React, { Component } from 'react';
import style from './style/style';

class AgencyForm extends Component {


  // handleSubmit(e) {
  //   e.preventDefault();
  //   let name = this.state.name.trim();
  //   let city = this.state.city.trim();
  //   let country = this.state.country.trim();
  //   let contact_name = this.state.contact_name.trim();
  //   let contact_phone = this.state.contact_phone.trim();
  //   let contact_email = this.state.contact_email.trim();
  //   if (!name || !city || !country || !contact_name || !contact_phone || !contact_email) {
  //     return;
  //   }
  //   this.props.onAgencySubmit({
  //     name: name,
  //     city: city,
  //     country: country,
  //     contact_name: contact_name,
  //     contact_phone: contact_phone,
  //     contact_email: contact_email
  //   });
  //   this.setState({
  //     name: '',
  //     city: '',
  //     country: '',
  //     contact_name: '',
  //     contact_phone: '',
  //     contact_email: ''
  //   });
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="mui-textfield">
                <input
                  type='text'
                  id='name'
                  placeholder={"Your Agency's Name"}
                  style={ style.agencyFormFields}
                  value={ this.props.newAgency.name }
                  onChange={(e) => this.props.handleInputChange(e)} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mui-textfield">
                <input
                  type='text'
                  id='city'
                  placeholder='City'
                  style={ style.agencyFormFields}
                  value={ this.props.newAgency.city }
                  onChange={(e) => this.props.handleInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mui-textfield">
                <input
                  type='text'
                  id='country'
                  placeholder='Country'
                  style={ style.agencyFormFields}
                  value={ this.props.newAgency.country }
                  onChange={(e) => this.props.handleInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mui-textfield">
                <input
                  type='text'
                  id='contact_name'
                  placeholder='Contact Name'
                  style={ style.agencyFormFields}
                  value={ this.props.newAgency.contact_name }
                  onChange={(e) => this.props.handleInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mui-textfield">
                <input
                  type='text'
                  id='contact_phone'
                  placeholder='Contact Phone'
                  style={ style.agencyFormFields}
                  value={ this.props.newAgency.contact_phone }
                  onChange={(e) => this.props.handleInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mui-textfield">
                <input
                  type='text'
                  id='contact_email'
                  placeholder='Contact Email'
                  style={ style.agencyFormFields}
                  value={ this.props.newAgency.contact_email }
                  onChange={(e) => this.props.handleInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-12">
              <button
                style={ style.formPost }
                onClick={() => this.props.registerAgency()}>Register Agency</button>
            </div>

        </div>
      </div>

    )
  }
}

export default AgencyForm;
