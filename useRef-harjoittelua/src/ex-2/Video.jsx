import NatureVideo from "../assets/nature.mp4";
import { useRef } from "react";

const Video = () => {
    const videoRef  = useRef(null);

    function enter() {
        videoRef.current.play();
    }

    function leave() {
        videoRef.current.pause();
    }
    return (
        <video 
            ref={videoRef}
            src={NatureVideo} 
            onMouseEnter={enter} 
            onMouseLeave={leave}></video>
    );
}
 
export default Video;