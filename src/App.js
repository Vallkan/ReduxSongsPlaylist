import React, { Component } from 'react';
import PlayerContainer from './containers/PlayerContainer/playerContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerContainer />
      </div>
    );
  }
}

export default App;
