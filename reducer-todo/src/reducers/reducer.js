export const initialState = {
    tasks: [
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
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        // case "TOGGLE_COMPLETED":
        //     return const toggleCompleted = id => {
        //         setTasks(tasks.map(task => {
        //           if(id === task.id){
        //             return {...task, completed: !task.completed};
        //           } else {
        //             return task;
        //           }
        //         }));
        //       }

        case "ADD_TASK":
            console.log('add task in reducer', action);
            // return {
            //     ...state.tasks,
            //     name: action.payload,
            //     id: Date.now(),
            //     completed: false
            // };

            const newTask = {
                name: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }

        case "TOGGLE_COMPLETED":
            console.log('toggle', action);
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload){
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    } else {
                        return task;
                    }
                })
            }

        case "CLEAR_COMPLETED":
            console.log('filter', action);
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            }

        default: return state;
    }
}