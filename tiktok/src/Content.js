import { useEffect, useState, useLayoutEffect } from "react";

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi clean-up nếu dependencies thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi clean-up nếu dependencies thay đổi (sync) *
// 4. Gọi useLayoutEffect callback (sync) *
// 5. Render lại UI

function Content() {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
        return () => {
            console.log("Clean-up");
        };
    }, [count]);

    const handleRun = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    );
}

export default Content;
