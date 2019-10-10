import React from 'react'
import '../../css/Input.css'

export const Button = ({ labelText = '', onClick }) => (
  <div className={'planning-input planning-button'} onClick={onClick}>
    <span>{labelText}</span>
  </div>
)
