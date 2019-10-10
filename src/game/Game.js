import React, { Component } from 'react'
import Story from './Story'

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
      <Story
        key={'test'}
        id={'test'}
        votingValues={this.state.votingValues}
      />
    ] })
  }

  render () {
    return (
      <div className={'planning-game'}>
        {this.state.stories}
      </div>
    )
  }
}

export default Game
