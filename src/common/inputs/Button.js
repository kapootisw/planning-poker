import React from 'react'

export const Button = ({ label = '', onClick }) => (
  <div className={'planning-input planning-button'} onClick={onClick}>
    <span>{label}</span>
  </div>
)
