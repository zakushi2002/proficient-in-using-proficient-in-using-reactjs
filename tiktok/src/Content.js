import { memo } from "react";

// Pure Component

function Content({ onIncrease }) {
    console.log("Content");
    return (
        <>
            <h1>HOC</h1>
            <button onClick={onIncrease}>Increase</button>
        </>
    );
}

export default memo(Content);
