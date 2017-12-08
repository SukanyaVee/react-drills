import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTasks from './todo'

class App extends Component {
  
  constructor()
  {
    super();
    this.state = {userInput: "", tasks: []};
    this.addTask = this.addTask.bind(this)
  }

  addTask(val)
  {
    this.setState({tasks:[...this.state.tasks, val]})
  }
  
  render() {
    return (
      <div className="App">
        <input onChange={event=> {this.setState({userInput: event.target.value})}}/>
        <button onClick={event=> {this.addTask(this.state.userInput)}}>Add Task</button>
        <DisplayTasks taskList={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
