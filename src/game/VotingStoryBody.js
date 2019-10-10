import React, { Fragment } from 'react'
import { TextAreaInput } from '../common/inputs/TextAreaInput'
import CardContainer from './CardContainer'
import { StoryActions } from './StoryActions'

export default function VotingStoryBody (props) {
  return (
    <Fragment>
      <h3>Vote on your story!</h3>
      <div className={'planning-story-details'} >
        <TextAreaInput
          name={'title'}
          labelText={'Title'}
          onChange={props.updateTitle}
          value={props.title}
        />
        <TextAreaInput
          name={'notes'}
          labelText={'Notes'}
          onChange={props.updateNotes}
          value={props.notes}
        />
        <CardContainer
          cards={props.cards}
        />
        <StoryActions
          votingValues={props.votingValues}
          voteForValue={props.voteForValue}
          updateScore={props.updateScore}
          voting={props.voting}
          score={props.score >= 0 ? props.score : '?'}
          revealCards={props.revealCards}
          completeStory={props.completeStory}
          replayStory={props.replayStory}
        />
      </div>
    </Fragment>
  )
}
