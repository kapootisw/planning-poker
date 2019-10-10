import React, { Component } from 'react'
import uuid from 'uuid/v4'

import { TextAreaInput } from '../common/inputs/TextAreaInput'
import { computeStoryScore } from './utils/computeStoryScore'
import { CardContainer } from './CardContainer'
import { StoryActions } from './StoryActions'
import '../css/Story.css'

class Story extends Component {
  state = {
    title: '',
    notes: '',
    voting: true,
    cards: [],
    score: -1,
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
    window.alert('Completed!')
  }

  replayStory = () => {
    this.setState({ cards: [], voting: true, score: -1 })
  }

  render () {
    return (
      <div key={this.props.id} className={'planning-story'}>
        Vote on your story!
        <div className={'planning-story-details'} >
          <TextAreaInput
            name={'title'}
            labelText={'Title'}
            onChange={this.updateTitle}
            value={this.state.title}
          />
          <TextAreaInput
            name={'notes'}
            labelText={'Notes'}
            onChange={this.updateNotes}
            value={this.state.notes}
          />
          <CardContainer
            cards={this.state.cards}
          />
          <StoryActions
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
      </div>
    )
  }
}

export default Story
