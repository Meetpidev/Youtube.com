// import vid from "../../components/videos/vid.mp4";
import Btns from "./btns.jsx";
import { useSelector } from "react-redux";
import Comments from "../../components/comments/comments.jsx";
import "./VideoPage.css";
import { useParams } from "react-router-dom";
import moment from "moment";

function VideoPage() {

  const {vid} = useParams();

  const vids = useSelector(state=>state.videoReducer);
  console.log(vids)

  const vv = vids?.data.filter((q) => q._id === vid)[0];

  const chanels = useSelector(state=>state?.chanellReducer);
   //  console.log(chanels);

    const curentChanel = chanels.filter(e=>e._id===vid)[0];

  return (
   <>
  
     <div className="video_container_page">
       <div className="video2_container_page">
         <div className="video_paly">

           <video src={`http://localhost:8080/${vv?.filePath}`} className="video_play_screen" controls autoPlay></video>

          <div className="video_description_2">
              <div className="video_title_div_2">
                 <p className="video_title_2">{vv?.videoTitle}</p>
                   <div className="time_to_upload">
                      <div className="view_pages">
                       {vv?.Views} <div className="dot"></div> {vv?.Uploader} {moment(vv?.createdAt).fromNow}
                       </div>
                       <Btns></Btns>
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
            More Videos
          </div>
         </div>
       </div>
   </>
  )
}

export default VideoPage