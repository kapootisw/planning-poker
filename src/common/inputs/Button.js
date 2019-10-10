import React from 'react'
import '../../css/Input.css'

export const Button = ({ label = '', onClick }) => (
  <div className={'planning-input planning-button'} onClick={onClick}>
    <span>{label}</span>
  </div>
)
