import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// import firestore from './fire'
import './css/App.css'
import Game from './game/Game'
import NewGame from './game/NewGame'

class App extends Component {
  state = {
    votingValueOptions: []
  }
  componentDidMount = () => {
    // this.loadVotingValues()
    // firestore.collection('games').doc('xOkZIouYo5IYmg9zSrqG').get()
    // .then(doc => {
    //     console.log(doc.data())
    //   }
    // )
  }

  // loadVotingValues = () => {
  //   firestore.collection('votingValues').get()
  //   .then(docs => {
  //     console.log(docs)
  //       // const votingValueOptions = docs.map(doc => ({
  //       //   id: doc.id(),
  //       //   ...doc.data()
  //       // }))
  //       // console.log(votingValueOptions)
  //     }
  //   )
  // }

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path={'/:gameId'} component={Game}/>
            <Route path={'/'} component={NewGame} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
