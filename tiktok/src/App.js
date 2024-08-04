import { useCallback, useState } from "react";
import Content from "./Content";

// 1. memo() => Higher Order Component (HOC)
// 2. useCallBack()
// - Reference types
// - React.memo()

// Hooks
// HOC
// Render Props

function App() {
    const [count, setCount] = useState(0);
    const handleIncrease = useCallback(() => {
        setCount((preData) => preData + 1);
    }, []);
    return (
        <div className="App" style={{ padding: `10px 32px` }}>
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
}

export default App;
