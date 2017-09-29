import React, { Component } from 'react';
import style from './style/style';

class AgencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      city: '', 
      country: '', 
      contact_name: '', 
      contact_phone: '', 
      contact_email: '' 
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleContactNameChange = this.handleContactNameChange.bind(this);
    this.handleContactPhoneChange = this.handleContactPhoneChange.bind(this);
    this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }
  handleCountryChange(e) {
    this.setState({ country: e.target.value });
  }
  handleContactNameChange(e) {
    this.setState({ contact_name: e.target.value });
  }
  handleContactPhoneChange(e) {
    this.setState({ contact_phone: e.target.value });
  }
  handleContactEmailChange(e) {
    this.setState({ contact_email: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name.trim();
    let city = this.state.city.trim();
    let country = this.state.country.trim();
    let contact_name = this.state.contact_name.trim();
    let contact_phone = this.state.contact_phone.trim();
    let contact_email = this.state.contact_email.trim();
    if (!name || !city || !country || !contact_name || !contact_phone || !contact_email) {
      return;
    }
    this.props.onAgencySubmit({ 
      name: name, 
      city: city,
      country: country,
      contact_name: contact_name,
      contact_phone: contact_phone,
      contact_email: contact_email
    });
    this.setState({ 
      name: '', 
      city: '',
      country: '',
      contact_name: '',
      contact_phone: '',
      contact_email: ''
    });
  }
  render() {
    return (
      <form style={ style.agencyForm } onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder={"Your Agency's Name"}
          style={ style.agencyFormFields}
          value={ this.state.name } 
          onChange={ this.handleNameChange } />
        <input
          type='text'
          placeholder='City'
          style={ style.agencyFormFields}
          value={ this.state.city } 
          onChange={ this.handleCityChange }/>
        <input
          type='text'
          placeholder='Country'
          style={ style.agencyFormFields}
          value={ this.state.country } 
          onChange={ this.handleCountryChange }/>
        <input
          type='text'
          placeholder='Contact Name'
          style={ style.agencyFormFields}
          value={ this.state.contact_name } 
          onChange={ this.handleContactNameChange }/>
        <input
          type='text'
          placeholder='Contact Phone'
          style={ style.agencyFormFields}
          value={ this.state.contact_phone } 
          onChange={ this.handleContactPhoneChange }/>
        <input
          type='text'
          placeholder='Contact Email'
          style={ style.agencyFormFields}
          value={ this.state.contact_email } 
          onChange={ this.handleContactEmailChange }/>
        
        <input
          type='submit'
          style={ style.formPost }
          value='Submit Agency'/>
      </form>
    )
  }
}

export default AgencyForm;