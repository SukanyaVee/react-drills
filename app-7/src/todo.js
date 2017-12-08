import React, { Component } from 'react';

class DisplayTasks extends Component
{
    render(props)
    {
        const list = this.prop.taskList.map(element=><h3>{element}</h3>)
        return (
            <div>{list}</div>
        );
    }
}

export default DisplayTasks;