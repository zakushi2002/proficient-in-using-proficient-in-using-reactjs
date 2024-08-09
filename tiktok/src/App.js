import { useStore, actions } from "./store";

function App() {
    const [state, dispatch] = useStore();
    const { tasks, taskInput } = state;
    const handleAddTask = () => {
        dispatch(actions.addTask(taskInput));
        dispatch(actions.setTaskInput(""));
    };

    return (
        <div className="App" style={{ padding: 32 }}>
            <h1>Context + useReducer</h1>
            <input
                value={state.taskInput}
                placeholder="Enter task name..."
                onChange={(e) => {
                    dispatch(actions.setTaskInput(e.target.value));
                }}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
