import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state= {arr: ["pearl","diamond","ruby","sapphire"]}
  }
  render() {
    const list = this.state.arr.map(element=><h3>{element}</h3>);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
