import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTasks from './todo'
import NewTask from './newTask'

class App extends Component {
  constructor()
  {
    super();
    this.state = { tasks: []};
    this.addToTasks = this.addToTasks.bind(this)
  }

  addToTasks(str){
    this.setState({tasks:[...this.state.tasks, str]})
  }


  
  render() {
    return (
      <div className="App">
        <NewTask addToTasks={this.addToTasks}/>
        <DisplayTasks taskList={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
