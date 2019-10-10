import React from 'react'
import '../../css/Input.css'

export const Select = ({ name, onChange, value, options = [] }) => (
  <div className={'planning-input'}>
    <select
      name={name}
      onChange={onChange}
      value={value}
    >
      {options}
    </select>
  </div>
)
