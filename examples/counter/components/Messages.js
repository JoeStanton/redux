import React, { PropTypes } from 'react'

const Messages = ({ value, errors, hint }) => {
  return (
    <div className="field-messages-container">
      {!value && <Hint message={hint} />}
      {errors && errors[0] && <Error message={errors[0]} />}
      {value && errors.length == 0 && <Tick />}
    </div>
  )
}
const Hint = ({ hint }) => <div className="field-messages__text">{hint}</div>
const Tick = () => <div className="field-messages__text field-messages__validation field-messages__error" />
const Error = ({ message }) => <div className="field-messages__error">{message}</div>

export default Messages
