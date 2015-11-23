import React from 'react'

const Label = ({ name, label }) => {
  return (
    <div className="form-element__label">
      <label className="form-label form-label--required" htmlFor={name}>{label}</label>
    </div>
  )
}

export default Label
