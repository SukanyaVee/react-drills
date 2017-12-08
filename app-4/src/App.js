import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor()
  {
    super();
    this.state = {userName: "", passWord: ""};
  }
  login(username, password)
  {
    alert(`Username is ${ this.state.userName }, Password is ${ this.state.passWord }`);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h3>Login</h3>
          <input onChange={event=>{this.setState({userName: event.target.value})}}/>
          <input onChange={event=>{this.setState({passWord: event.target.value})}}/>
          <button onClick={event=>{this.login(this.state.userName, this.state.passWrod)}}>Log In</button>
        </div> 
      </div>
    );
  }
}

export default App;
