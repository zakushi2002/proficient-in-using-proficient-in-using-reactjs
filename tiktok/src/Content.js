import { useEffect, useState } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback sau khi component mounted
// 3. useEffect(callback, [desps])
// - Gọi lại callback nếu có 1 trong các deps thay đổi

// ==============================
// General characteristics
// a. Callback luôn được gọi sau khi component mounted

const tabs = ["todos", "albums", "posts"];

function Content() {
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [kind, setKind] = useState(tabs[0]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${kind}`)
            .then((response) => response.json())
            .then((tasks) => setTasks(tasks));
    }, [kind]);
    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={
                        kind === tab
                            ? { color: "#fff", backgroundColor: "#333" }
                            : {}
                    }
                    onClick={() => setKind(tab)}
                >
                    {tab}
                </button>
            ))}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
