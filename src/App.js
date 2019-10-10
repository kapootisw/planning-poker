import React, { Component } from 'react'
// import firestore from './fire'
import './css/App.css'
import Game from './game/Game'

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
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
