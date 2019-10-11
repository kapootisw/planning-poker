import React, { Component } from 'react'
import uuid from 'uuid/v4'

import { computeStoryScore } from './utils/computeStoryScore'
import VotingStoryBody from './VotingStoryBody'
import CompleteStoryBody from './CompleteStoryBody'
import '../css/Story.css'

class Story extends Component {
  updateFields = (changeList = []) => {
    this.props.updateValuesOnStoryByKey(this.props.story.id, changeList)
  }

  updateTitle = (e) => {
    e.preventDefault && e.preventDefault()
    this.updateFields([{ key: 'title', value: e.target.value }])
  }

  updateNotes = (e) => {
    e.preventDefault && e.preventDefault()
    this.updateFields([{ key: 'notes', value: e.target.value }])
  }

  updateScore = (e) => {
    e.preventDefault && e.preventDefault()
    this.updateFields([{ key: 'score', value: e.target.value }])
  }

  voteForValue = (value) => {
    const cards = this.props.story.cards.slice()
    cards.push(
      {
        id: uuid(),
        name: uuid().substr(0, 4),
        value,
        hidden: true,
      }
    )
    this.updateFields([{ key: 'cards', value: cards }])
  }

  revealCards = () => {
    const cards = this.props.story.cards.slice().map(card =>
      ({
        ...card,
        hidden: false
      })
    )
    const score = computeStoryScore(cards)
    this.updateFields([
      { key: 'cards', value: cards},
      { key: 'voting', value: false },
      { key: 'score', value: score }
    ])
  }

  completeStory = () => {
    this.updateFields([{ key: 'complete', value: true }])
    this.props.addNewStory()
  }

  replayStory = () => {
    this.updateFields([
      { key: 'cards', value: []},
      { key: 'voting', value: true },
      { key: 'score', value: -1 }
    ])
  }

  render () {
    const StoryBodyComponent = this.props.story.complete ? CompleteStoryBody : VotingStoryBody

    return (
      <div key={this.props.id} className={'planning-story'}>
        <StoryBodyComponent
          updateTitle={this.updateTitle}
          title={this.props.story.title}
          updateNotes={this.updateNotes}
          notes={this.props.story.notes}
          cards={this.props.story.cards}
          votingValues={this.props.votingValues}
          voteForValue={this.voteForValue}
          updateScore={this.updateScore}
          voting={this.props.story.voting}
          score={this.props.story.score >= 0 ? this.props.story.score : '?'}
          revealCards={this.revealCards}
          completeStory={this.completeStory}
          replayStory={this.replayStory}
        />
      </div>
    )
  }
}

export default Story
