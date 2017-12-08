import React from 'react'

function DisplayTasks(props)
{
    const list = this.props.taskList.map(element=><h3>{element}</h3>)
    return (
        <div>{list}</div>
    )
}

export default DisplayTasks