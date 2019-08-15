import React from 'react';
import Task from './Task.js';

const TaskList = (props) => {
    // console.log('TaskList', props);
    return (
        <div>
            {props.tasks.map(task => {
                return <Task task={task} toggleCompleted={props.toggleCompleted}/>
            })}
        </div>
    )
}

export default TaskList;