import Video from "./Video";
import { useRef } from "react";
function App() {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div className="App" style={{ padding: 32 }}>
            <Video ref={videoRef} />
            <br />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}

export default App;
