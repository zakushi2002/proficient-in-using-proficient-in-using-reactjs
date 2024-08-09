import video1 from "./videos/English.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current.play();
        },
        pause: () => {
            videoRef.current.pause();
        },
    }));
    return <video width={320} height={240} src={video1} ref={videoRef} />;
}

export default forwardRef(Video);
