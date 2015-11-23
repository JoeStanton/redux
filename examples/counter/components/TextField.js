import React, { PropTypes } from 'react'
import Messages from './Messages'

// Small, easy to test stateless components

const TextField = ({ label, name, hint, onChange, value, errors, required }) => {
  return (
    <div className="form-element">
      <Label
        name={name}
        label={label}
        required={required}
      />
      <div className="form-element__input">
        <input label={label} name={name} required type="text" className="form-input" id={name} onChange={onChange} value={value} />
        <Messages hint={hint} errors={errors} value={value} />
      </div>
    </div>
  )
}

const Label = ({ name, label }) => {
  return (
    <div className="form-element__label">
      <label className="form-label form-label--required" htmlFor={name}>{label}</label>
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired
}

export default TextField
