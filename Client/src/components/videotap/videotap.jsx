import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SimpleVideoPlayer = () => {

  const videoRef = useRef(null);

  const handleTap = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const side = clientX > screenWidth / 2 ? 1 : 0;

 
    if (side) {
      videoRef.current.currentTime += 10;
    } else {
      videoRef.current.currentTime -= 10; 
    }

    console.log("Video tapped at", clientX, clientY);
  };

  return (
    <div>
      <video
        ref={videoRef}
        onClick={handleTap}
        src="./Videos/test.mp4"
        controls
        style={{ width: "100%", height: "auto", cursor: "pointer" }}
      />
    </div>
  );
};

export default SimpleVideoPlayer;  
