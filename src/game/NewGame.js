import React, { Component } from 'react'
import { TextInput } from '../common/inputs/TextInput'
import { Button } from '../common/inputs/Button'
import uuid from 'uuid/v4'

class NewGame extends Component {
  state = {
    moderatorName: '',
    gameName: '',
    votingValuesChoice: 'fibonocci',
  }

  updateModeratorName = (e) => {
    e.preventDefault && e.preventDefault()
    this.setState({ moderatorName: e.target.value })
  }

  updateGameName = (e) => {
    e.preventDefault && e.preventDefault()
    this.setState({ gameName: e.target.value })
  }

  createGame = () => {
    // TODO: actually make this create the game in the db
    this.props.history.push(`/${uuid()}`)
  }

  render = () => {
    return (
      <div className={'newGame'}>
        <h2>Create a new game!</h2>
        <TextInput
          name={'moderatorName'}
          labelText={'Your Name'}
          onChange={this.updateModeratorName}
          value={this.state.moderatorName}
        />
        <TextInput
          name={'gameName'}
          labelText={'Game Name'}
          onChange={this.updateGameName}
          value={this.state.gameName}
        />
        <select
          name={''}
          onChange={() => window.alert('You changed it!')}
          value={this.state.votingValuesChoice}
        >
          <option value={''}>This is a test</option>
          <option value={'1'}>This is a test too</option>
        </select>
        <Button
          label={'Create Game'}
          onClick={this.createGame}
        />
      </div>
    )
  }
}

export default NewGame
