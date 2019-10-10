import React from 'react'
import '../../css/Input.css'

export const TextInput = ({ name, onChange, value, labelText, disabled = false }) => (
    <div className={'planning-input'} >
      <label htmlFor={name} className={'planning-input-label'}>{labelText}</label>
      {
        disabled ?
        <input name={name} type={'text'} onChange={onChange} value={value} disabled/>
        : <input name={name} type={'text'} onChange={onChange} value={value} />
      }
    </div>
)
