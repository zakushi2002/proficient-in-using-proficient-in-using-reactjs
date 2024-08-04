import { useRef, useState, useEffect } from "react";

function Content() {
    const [count, setCount] = useState(60);
    let timerId = useRef();
    const preCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        preCount.current = count;
    }, [count]);

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount((preData) => preData - 1);
        }, 1000);
        console.log(`====> Start Timer ${timerId.current}`);
    };
    const handleStop = () => {
        clearInterval(timerId.current);
        console.log(`====> Stop Timer ${timerId.current}`);
    };

    console.log(
        `====> Render: count - ${count} & preCount - ${preCount.current}`
    );

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    }, [count]);

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Run</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Content;
