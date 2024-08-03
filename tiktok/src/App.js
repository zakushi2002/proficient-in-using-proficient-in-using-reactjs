import { useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState(() => {
        // Get local storage
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            return JSON.parse(savedTasks);
        }
        return [];
    });
    const handleSubmit = () => {
        if (!task) return;
        setTasks((preData) => {
            // Save local storage
            preData = [...preData, task];
            localStorage.setItem("tasks", JSON.stringify(preData));
            return preData;
        });
        setTask("");
    };
    const clearTaskLocalStorage = () => {
        localStorage.removeItem("tasks");
        setTasks([]);
    };

    return (
        <div className="App" style={{ padding: 32 }}>
            <h1>Task List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <button onClick={clearTaskLocalStorage}>
                Clear Task Local Storage
            </button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
