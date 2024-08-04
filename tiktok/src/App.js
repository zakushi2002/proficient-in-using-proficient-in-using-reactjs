import { useState } from "react";
import Content from "./Content";

// 1. memo() => Higher Order Component (HOC)
// 2. useCallBack()

// Hooks
// HOC
// Render Props

function App() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount((preData) => preData + 1);
    };
    return (
        <div className="App" style={{ padding: `10px 32px` }}>
            <Content count={count} />
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default App;
