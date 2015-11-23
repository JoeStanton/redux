import React, { Component } from 'react'
import Form from './Form'
import TextField from './TextField'

@Form
class RegistrationForm extends Component {
  static validations = {
    first_name: [
      { message: 'Must be the correct length', validate: (value) => value && value.length >= 3 }
    ],
    last_name: [
      { message: 'Must match first name', validate: (value, { first_name }) => value && value === first_name }
    ]
  }
  render() {
    const { field, valid } = this.props
    return (
      <div className="form__main">
        <TextField
          name="spree_user[first_name]"
          label="First Name"
          hint="Enter first name"
          required={true}
          {...field('first_name')}
        />
        <TextField
          name="spree_user[last_name]"
          label="Last Name"
          hint="Enter last name"
          required={true}
          {...field('last_name')}
        />
        <NestedForm field={field} />
        <input type="submit" disabled={!valid} />
      </div>
    )
  }
}

let NestedForm = ({ field }) => {
  return (
    <TextField
      name="gift_card[card_number]"
      label="Card Number"
      hint="Enter gift card number"
      required={true}
      {...field('card_number')}
    />
  )
}

NestedForm.validations = {
  card_number: [
    { message: 'Must be the correct length', validate: (value) => value && value.length >= 20 }
  ]
}

NestedForm = Form(NestedForm)

export default RegistrationForm
