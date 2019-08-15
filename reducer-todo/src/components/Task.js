import React from 'react';
import './Task.css';

const Task = props => {
    // console.log('task', props);
    return (
        <div
            onClick={() => props.toggleCompleted(props.task.id)}
            className={props.task.completed ? "complete" : ""}
        >
            <p>{props.task.name}</p>
        </div>
    )
}

export default Task;