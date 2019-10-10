import React, { Fragment } from 'react'
import { TextInput } from '../common/inputs/TextInput'
import { Button } from '../common/inputs/Button'
import '../css/StoryActions.css'

export function StoryActions ({ score, votingValues = [], voteForValue, updateScore, voting = true, revealCards, completeStory, replayStory }) {
  return (
    <div className={'planning-story-actions'}>
      <TextInput
        name={'score'}
        labelText={'Average Score'}
        onChange={updateScore}
        value={score}
        disabled={voting}
      />
      <div className={'planning-actions-container'}>
        {
          voting ?
          <Fragment>
            <div className={'planning-voting-values'}>
              {votingValues.map(votingValue => (
                <Button
                  key={votingValue}
                  labelText={votingValue === -1 ? '?' : votingValue}
                  onClick={() => voteForValue(votingValue)}
                />
              ))}
            </div>
            <div className="planning-action-buttons">
              <Button
                labelText={'Reveal Cards'}
                onClick={revealCards}
              />
            </div>
          </Fragment>
          :
            <div className="planning-action-buttons">
              <Button
                labelText={'Complete Story'}
                onClick={completeStory}
              />
              <Button
                labelText={'Replay'}
                onClick={replayStory}
              />
            </div>
        }
      </div>
    </div>
  )
}
