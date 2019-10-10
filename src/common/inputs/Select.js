import React from 'react'
import '../../css/Input.css'

export const Select = ({ name, labelText, onChange, value, options = [] }) => (
  <div className={'planning-input'}>
    <label htmlFor={name} className={'planning-input-label'}>{labelText}</label>
    <select
      name={name}
      onChange={onChange}
      value={value}
    >
      {options}
    </select>
  </div>
)
