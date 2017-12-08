import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {userInput:"", arr: ["pearl","diamond","ruby","sapphire"], list=[];}
  }
  filterwith(val) 
  {
    let n;
    this.setState{list: [];}
    this.state.arr.forEach(elem=> {if (n=elem.includes(val)) {this.setState({list:[...this.state.list, '<h3>{elem}</h3>')}}});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={event=>this.setState({userInput:event.target.value})} />{this.filterwith(this.state.userInput)}
        <div>
        {this.state.list}
      </div>
      </div>
    );
  }
}

export default App;
