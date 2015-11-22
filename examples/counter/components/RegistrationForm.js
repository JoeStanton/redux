import React, { Component, PropTypes } from 'react'
import TextField from './TextField'

class RegistrationForm extends Component {
  validations = {
    first_name: [
      { message: 'Must be the correct length', validate: (value) => value && value.length >= 3 }
    ]
  }
  field(name) {
    return {
      onChange: (e) => this.props.change(name, e.target.value),
      value: this.props[name],
      errors: this.errors(name, this.props[name])
    }
  }
  errors(name, value) {
    if (!value) { return [] }
    return (this.validations[name] || []).map((rule) => rule.validate(value) ? null : rule.message).filter(x => !!x)
  }
  render() {
    return (
      <div className="form__main">
        <TextField
          name="spree_user[first_name]"
          label="First Name"
          hint="Enter first name"
          required={true}
          {...this.field('first_name')}
        />
        <TextField
          name="spree_user[last_name]"
          label="Last Name"
          hint="Enter last name"
          required={true}
          {...this.field('last_name')}
        />
        <NestedForm field={::this.field} />
      </div>
    )
  }
}

class NestedForm {
  validations = {
    card_number: [
      { message: 'Must be the correct length', validate: (value) => value && value.length >= 20 }
    ]
  }
  render() {
    return (
      <TextField
        name="gift_card[card_number]"
        label="Card Number"
        hint="Enter gift card number"
        required={true}
        {...this.props.field('card_number')}
      />
    )
  }
}

export default RegistrationForm
