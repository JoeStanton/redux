import React, { Component } from 'react'

// Returns a HoC wrapping a form. The container stores all state for the form, leaving all child components stateless.
// Provides just one function, `field` used to set up correct bindings to form fields.

const Form = (WrappedComponent) => {
  class WrapperForm extends Component {
    state = {}
    field(name) {
      return {
        onChange: (e) => this.setState({ [name]: e.target.value }),
        value: this.state[name],
        errors: this.errors(name, this.state[name])
      }
    }
    errors(name, value) {
      if (!value) { return [] }
      return (WrappedComponent.validations[name] || []).map((rule) => rule.validate(value, this.state) ? null : rule.message).filter(x => !!x)
    }
    valid() {
      return false
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props} field={::this.field} valid={this.valid()} />
    }
  }
  WrapperForm.displayName = `Form(${WrappedComponent.displayName})`
  return WrapperForm
}

export default Form
