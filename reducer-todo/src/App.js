import React, { useState, useReducer } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm.js';
import { reducer, initialState } from './reducers/reducer.js';

function App() {
  const [tasks, setTasks] = useState([
    {
        name: 'learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        name: 'learn about redux',
        completed: false,
        id: 3892987590
    }
  ]);
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const toggleCompleted = id => {
    // setTasks(tasks.map(task => {
    //   if(id === task.id){
    //     return {...task, completed: !task.completed};
    //   } else {
    //     return task;
    //   }
    // }));
    dispatch({type: "TOGGLE_COMPLETED", payload: id})
  }

  const addTask = task => {
  //   setTasks([...tasks, {
  //     name: task,
  //     id: Date.now(),
  //     completed: false
  //   }])

    dispatch({type: "ADD_TASK", payload: task})
  }

const clearCompleted = tasks => {
  dispatch({type: "CLEAR_COMPLETED", payload: tasks})
}

  console.log('state', state)
  return (
    <div className="App">
      <TaskList tasks={state.tasks} toggleCompleted={toggleCompleted} />
      <TaskForm addTask={addTask} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
