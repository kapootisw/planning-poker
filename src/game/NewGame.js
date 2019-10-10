import React, { Component } from 'react'
import { TextInput } from '../common/inputs/TextInput'

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
      </div>
    )
  }
}

export default NewGame
