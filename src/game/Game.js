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
      }
    ] })
  }

  addNewStory = () => {
    this.setState(prevState => {
      return {
        stories: prevState.stories.concat({ id: uuid() })
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
        />
      </div>
    )
  }
}

export default Game
