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
// b. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ["todos", "albums", "posts"];

function Content() {
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [kind, setKind] = useState(tabs[0]);
    const [scrollUpButton, setScrollUpButton] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${kind}`)
            .then((response) => response.json())
            .then((tasks) => setTasks(tasks));
    }, [kind]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollUpButton(window.scrollY >= 200);
        };

        window.addEventListener("scroll", handleScroll);
        console.log("Mounted...");
        return () => {
            window.removeEventListener("scroll", handleScroll);
            console.log("Cleanup...");
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleResize);
        };
    }, []);
    return (
        <div>
            <h1>{width}</h1>
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
            {scrollUpButton && (
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                        padding: 8,
                        borderRadius: 8,
                    }}
                >
                    Scroll up
                </button>
            )}
        </div>
    );
}

export default Content;
