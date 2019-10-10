import React from 'react'

export default function CompleteStoryBody ({title, notes, score}) {
  return (
    <div className={'planning-complete-story'}>
      <div className={'planning-complete-story-text'}>
        <h4>{title}</h4>
        <div>{notes}</div>
      </div>
      <div className={'planning-complete-score-container'}>
        <h5>Score</h5>
        <div className={'planning-complete-story-score'}>{score}</div>
      </div>
    </div>
  )
}
