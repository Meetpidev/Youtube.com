// import vid from "../../components/videos/vid.mp4";
import Btns from "./btns.jsx";
import { useSelector, useDispatch } from "react-redux";
import Comments from "../../components/comments/comments.jsx";
import "./VideoPage.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from "react";
import { addPoints } from "../../actions/points.js";

function VideoPage() {

    const { userId } = useParams();

    const [videoCompleted, setVideoCompleted] = useState(false);

    const dispatch = useDispatch();

    const points = useSelector(state => state.pointsReducer.points);

    const handleVideoComplete = () => {
      if (!videoCompleted) {
        setVideoCompleted(true);
        dispatch(addPoints(userId));
      }
    };
  
    // useEffect(() => {
    //   console.log(points);
    // }, [points]);

  
  // 

  // const [points, setPoints] = useState(0);
  // const [videoCompleted, setVideoCompleted] = useState(false);

  // const handleVideoComplete = async () => {
  //   if (!videoCompleted) {
  //     setVideoCompleted(true);
  //     const response = await fetch('/user/points', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ userId }),
  //     });

  //     const data = await response.json();
  //     setPoints(data.points);
  //   }
  // };

  const {vid} = useParams();

  const vids = useSelector(state=>state.videoReducer);
  console.log(vids)

  const vv = vids?.data.filter((q) => q._id === vid)[0];

  const chanels = useSelector(state=>state?.chanellReducer);
    console.log("Channels:",chanels);

    const curentChanel = chanels.filter(e=>e._id===vid)[0];

  return (
   <>
  
     <div className="video_container_page">
       <div className="video2_container_page">
         <div className="video_paly">

           <video src={`http://localhost:8080/${vv?.filePath}`} 
           className="video_play_screen" 
           controls 
           autoPlay
           onEnded={handleVideoComplete}
           ></video>

          <div className="video_description_2">
              <div className="video_title_div_2">
                 <p className="video_title_2">{vv?.videoTitle}</p>
                   <div className="time_to_upload">
                      <div className="view_pages">Views:&nbsp;
                       {vv?.Views} <div className="dot"></div> {vv?.Uploader} {moment(vv?.createdAt).fromNow()}
                       </div>
                       <Btns vv={vv} vid={vid}></Btns>
                   </div>
                   

                  </div>
                  
            
            <div className="chanel_details">
                <div className="chanle_logo">
                  <b className="chanel-logo">
                    <p>C</p>
                  </b>
                <p className="chanel_name">{vv?.Uploader}</p>
                </div>
              
            </div>

            <div className="comments_box">
                <h2>Comments</h2>
                <Comments></Comments>
            </div>

          </div>
        </div>

          <div className="more_videos">
            More Videos: {points}
          </div>
         </div>
       </div>
   </>
  )
}

export default VideoPage