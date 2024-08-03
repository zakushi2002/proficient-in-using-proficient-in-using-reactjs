import { useState } from "react";
import Content from "./Content";

function App() {
    const [show, setShow] = useState(false);
    const showContent = () => setShow(!show);
    return (
        <div className="App" style={{ padding: 32 }}>
            <button onClick={showContent}>Toggle</button>
            {show && <Content />}
        </div>
    );
}

export default App;
