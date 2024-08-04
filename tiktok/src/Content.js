import { memo } from "react";
function Content({ count }) {
    console.log("Content");
    return (
        <div>
            <h1>HOC {count}</h1>
        </div>
    );
}

export default memo(Content);
