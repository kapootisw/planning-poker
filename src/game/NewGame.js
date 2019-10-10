import React, { Component } from 'react'
import { TextInput } from '../common/inputs/TextInput'
import { Select } from '../common/inputs/Select'
import { Button } from '../common/inputs/Button'
import '../css/NewGame.css'
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

  updateVotingValuesChoice = (e) => {
    e.preventDefault && e.preventDefault()
    this.setState({ votingValuesChoice: e.target.value })
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
        <Select
          name={'votingValuesChoice'}
          labelText={'Select Value Sequence'}
          onChange={this.updateVotingValuesChoice}
          value={this.state.votingValuesChoice}
          options={
            [
              <option key={'fibonocci'} value={'fibonocci'}>Fibonocci (0, 0.5, 1, 2, 3, 5, 8, 13, 21, ?)</option>,
              <option key={'tshirt'} value={'tshirt'}>T-Shirt Sizes (XXS, XS, S, M, L, XL, XXL)</option>,
            ]
          }
        />
        <Button
          labelText={'Create Game'}
          onClick={this.createGame}
        />
      </div>
    )
  }
}

export default NewGame
