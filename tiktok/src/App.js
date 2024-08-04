import { useRef, useReducer } from "react";

// useState
// 1. Initial state: 0
// 2. Action: Increase (state +1) or Decrease (state -1)

// useReducer
// 1. Initial state: 0
// 2. Action: Increase (state +1) or Decrease (state -1)
// 3. Reducer: (state, action) => state
// 4. Dispatch: dispatch(action)

// Initial state
const initialState = {
    task: "",
    tasks: [],
};

// Actions
const SET_JOB_ACTION = "SET_JOB_ACTION";
const ADD_TASK_ACTION = "ADD_TASK_ACTION";
const REMOVE_TASK_ACTION = "REMOVE_TASK_ACTION";

const setTask = (payload) => {
    return { type: SET_JOB_ACTION, payload };
};
const addTask = (payload) => {
    return { type: ADD_TASK_ACTION, payload };
};
const removeTask = (payload) => {
    return { type: REMOVE_TASK_ACTION, payload };
};
// Reducer
const reducer = (state, action) => {
    console.log("Reducer", state, action);
    let newState;
    switch (action.type) {
        case SET_JOB_ACTION:
            newState = { ...state, task: action.payload };
            break;
        case ADD_TASK_ACTION:
            newState = {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
            break;
        case REMOVE_TASK_ACTION:
            const newTasks = [...state.tasks];
            newTasks.splice(action.payload, 1);
            newState = { ...state, tasks: newTasks };
            break;
        default:
            throw new Error(`Unsupported action type: ${action}`);
    }
    console.log("New state", newState);
    return newState;
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { task, tasks } = state;
    const inputTaskNameRef = useRef();

    const handleAddTask = () => {
        if (!task) {
            return;
        }
        dispatch(addTask(task));
        dispatch(setTask(""));
        inputTaskNameRef.current.focus();
    };

    const handleRemoveTask = (index) => {
        if (tasks.length === 1) {
            inputTaskNameRef.current.focus();
        }
        dispatch(removeTask(index));
    };

    return (
        <div className="App" style={{ padding: `10px 32px` }}>
            <h1>Todo List</h1>
            <input
                ref={inputTaskNameRef}
                type="text"
                value={task}
                onChange={(e) => dispatch(setTask(e.target.value))}
                placeholder="Enter task name..."
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <svg
                            onClick={() => handleRemoveTask(index)}
                            style={{
                                cursor: "pointer",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
