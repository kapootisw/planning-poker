import React from 'react'
import '../css/CardContainer.css'
import { Card } from './Card'

export default function CardContainer ({ cards = [] }) {
  return (
    <div className={'planning-card-container'}>
      {
        cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            value={card.value}
            hidden={card.hidden}
          />
        ))
      }
    </div>
  )
}
