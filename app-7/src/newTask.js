import React, { Component } from 'react';

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }
    addTask(val)
    {
      this.props.tasks.push(val)
    }
    render(props)
    {
        return(
            <input onChange={event=> {this.setState({userInput: event.target.value})}}/>
            <button onClick={event=> {this.props.addToTasks(this.state.userInput)}}>Add Task</button>
        );
    }   
}

export default NewTask;