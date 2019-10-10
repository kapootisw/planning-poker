import React from 'react'
import '../../css/Input.css'

export const TextAreaInput = ({ name, onChange, value, labelText }) => (
    <div className={'planning-input'} >
      <label htmlFor={name} className={'planning-input-label'}>{labelText}</label>
      <textarea name={name} onChange={onChange} value={value} />
    </div>
)
