import React from 'react'

export default function CompleteStoryBody ({title, notes, score}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{notes}</div>
      <div>{score}</div>
    </div>
  )
}
