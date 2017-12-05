import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {userInput:""}
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={event=>this.setState({userInput:event.target.value})}/>
        <div>
          {this.state.userInput}
        </div>
      </div>
    );
  }
}

export default App;
