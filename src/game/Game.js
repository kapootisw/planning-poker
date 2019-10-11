import React, { Component } from 'react'
import StoryContainer from './StoryContainer'
import uuid from 'uuid/v4'

class Game extends Component {
  state = {
    stories: [],
    votingValues: [0, 0.5, 1, 2, 3, 5, 8, 13, 21, -1]
  }

  componentDidMount = () => {
    this.loadStories()
  }

  loadStories = () => {
    this.setState({ stories: [
      {
        id: uuid(),
        title: '',
        notes: '',
        voting: true,
        cards: [],
        score: -1,
        complete: false,
      }
    ] })
  }

  updateValuesOnStoryByKey = (storyId, changeList = []) => {
    this.setState(prevState => {
      const stories = prevState.stories.slice()
      const storyToEdit = stories.find(story => story.id === storyId)
      changeList.forEach(({ key, value }) => storyToEdit[key] = value)
      return { stories }
    })
  }

  addNewStory = () => {
    this.setState(prevState => {
      return {
        stories: prevState.stories.concat(
          {
            id: uuid(),
            title: '',
            notes: '',
            voting: true,
            cards: [],
            score: -1,
            complete: false,
          })
      }
    })
  }

  render () {
    return (
      <div className={'planning-game'}>
        <StoryContainer
          stories={this.state.stories}
          votingValues={this.state.votingValues}
          addNewStory={this.addNewStory}
          updateValuesOnStoryByKey={this.updateValuesOnStoryByKey}
        />
      </div>
    )
  }
}

export default Game
