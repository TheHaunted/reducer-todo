import React, { useState } from 'react';

const TaskForm = props => {
    const [newTask, setNewTask] = useState('')
    // console.log('TaskForm props', newTask);

    const handleChange = event => {
        setNewTask(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addTask(newTask)
        setNewTask('');
    }

    const clearCompleted = event =>{
        event.preventDefault();
        props.clearCompleted();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="newTask"
                placeholder="Add new task"
                onChange={handleChange}
                value={newTask}
            />
            <button type="submit">Submit</button>
            <button onClick={event => clearCompleted(event)}>Clear Completed</button>
        </form>
    )
}

export default TaskForm;