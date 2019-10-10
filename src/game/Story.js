import React, { Component } from 'react'
import uuid from 'uuid/v4'

import { computeStoryScore } from './utils/computeStoryScore'
import VotingStoryBody from './VotingStoryBody'
import CompleteStoryBody from './CompleteStoryBody'
import '../css/Story.css'

class Story extends Component {
  state = {
    title: '',
    notes: '',
    voting: true,
    cards: [],
    score: -1,
    complete: false,
  }

  updateTitle = (e) => {
    e.preventDefault && e.preventDefault()
    this.setState({ title: e.target.value })
  }

  updateNotes = (e) => {
    e.preventDefault && e.preventDefault()
    this.setState({ notes: e.target.value })
  }

  updateScore = (e) => {
    e.preventDefault && e.preventDefault()
    this.setState({ score: e.target.value })
  }

  voteForValue = (value) => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.concat(
          {
            id: uuid(),
            name: uuid().substr(0, 4),
            value,
            hidden: true,
          }
        )
      }
    })
  }

  revealCards = () => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(card =>
          ({
            ...card,
            hidden: false
          })
        ),
        voting: false,
        score: computeStoryScore(prevState.cards)
      }
    })
  }

  completeStory = () => {
    this.setState({ complete: true })
    this.props.addNewStory()
  }

  replayStory = () => {
    this.setState({ cards: [], voting: true, score: -1 })
  }

  render () {
    const StoryBodyComponent = this.state.complete ? CompleteStoryBody : VotingStoryBody
    return (
      <div key={this.props.id} className={'planning-story'}>
        <StoryBodyComponent
          updateTitle={this.updateTitle}
          title={this.state.title}
          updateNotes={this.updateNotes}
          notes={this.state.notes}
          cards={this.state.cards}
          votingValues={this.props.votingValues}
          voteForValue={this.voteForValue}
          updateScore={this.updateScore}
          voting={this.state.voting}
          score={this.state.score >= 0 ? this.state.score : '?'}
          revealCards={this.revealCards}
          completeStory={this.completeStory}
          replayStory={this.replayStory}
        />
      </div>
    )
  }
}

export default Story
