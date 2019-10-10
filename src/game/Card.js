import React from 'react'
import classnames from 'classnames'
import '../css/Card.css'

export const Card = ({ id, hidden = true, value = -1, name = '' }) => (
  <div className={'planning-card-and-name'}>
    <div key={id} className={classnames('planning-card', {hidden: hidden})}>
      {
        hidden
        ? null
        : <div>{value === -1 ? '?' : value}</div>
      }
    </div>
    <h2 className={'planning-card-name'}>
      {name}
    </h2>
  </div>
)
