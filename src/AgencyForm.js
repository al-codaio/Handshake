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
        <form className="mui-form">
          <h2 style={ style.formHeader }>Register Your Agency on the Blockchain</h2>

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="mui-textfield">
                  <input
                    type='text'
                    id='name'
                    placeholder={"Your Agency's Name"}
                    style={ style.agencyFormFields}
                    value={ this.props.newAgency.name }
                    onChange={(e) => this.props.handleInputChange(e)} />
                    <label htmlFor="name">Agency Name</label>
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <div className="mui-textfield">
                  <input
                    type='text'
                    id='city'
                    placeholder='City'
                    style={ style.agencyFormFields}
                    value={ this.props.newAgency.city }
                    onChange={(e) => this.props.handleInputChange(e)}/>
                    <label htmlFor="city">City</label>
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <div className="mui-textfield">
                  <input
                    type='text'
                    id='country'
                    placeholder='Country'
                    style={ style.agencyFormFields}
                    value={ this.props.newAgency.country }
                    onChange={(e) => this.props.handleInputChange(e)}/>
                    <label htmlFor="country">Country</label>
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <div className="mui-textfield">
                  <input
                    type='text'
                    id='contact_name'
                    placeholder='Contact Name'
                    style={ style.agencyFormFields}
                    value={ this.props.newAgency.contact_name }
                    onChange={(e) => this.props.handleInputChange(e)}/>
                    <label htmlFor="contact_name">Contact Name</label>
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <div className="mui-textfield">
                  <input
                    type='text'
                    id='contact_phone'
                    placeholder='Contact Phone'
                    style={ style.agencyFormFields}
                    value={ this.props.newAgency.contact_phone }
                    onChange={(e) => this.props.handleInputChange(e)}/>
                    <label htmlFor="contact_phone">Contact Phone</label>
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <div className="mui-textfield">
                  <input
                    type='text'
                    id='contact_email'
                    placeholder='Contact Email'
                    style={ style.agencyFormFields}
                    value={ this.props.newAgency.contact_email }
                    onChange={(e) => this.props.handleInputChange(e)}/>
                    <label htmlFor="contact_email">Contact Email</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  style={ style.formPost }
                  onClick={() => this.props.registerAgency()}>Register Agency</button>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default AgencyForm;
