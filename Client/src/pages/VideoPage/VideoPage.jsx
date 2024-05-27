import vid from "../../components/videos/vid.mp4";
import Btns from "./btns.jsx";
import Comments from "../../components/comments/comments.jsx";
import "./VideoPage.css";

function VideoPage() {
  return (
   <>
  
     <div className="video_container_page">
       <div className="video2_container_page">
         <div className="video_paly">

           <video src={vid} className="video_play_screen" controls autoPlay></video>

          <div className="video_description_2">
              <div className="video_title_div_2">
                 <p className="video_title_2">Title</p>
                   <div className="time_to_upload">
                      <div className="view_pages">
                        5 views <div className="dot"></div> video uploaded 1 year ago 
                       </div>
                       <Btns></Btns>
                   </div>
                   

                  </div>
                  
            
            <div className="chanel_details">
                <div className="chanle_logo">
                  <b className="chanel-logo">
                    <p>C</p>
                  </b>
                <p className="chanel_name">Chanel Name</p>
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