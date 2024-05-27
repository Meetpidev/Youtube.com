import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom'
import "./VideoShowCase.css";


function VideoShowCase({vid}) {
  return (
   <>
     <Link to={`/videopage/${vid?._id}`}>
       <video src={`${vid?.video_src}`}></video>
     </Link>

     <div className="video_description">

        <div className="chanel_logo">
            <div className="chanel_logo">
                <p className="uploder">{vid?.Uploader.charAt(0).toUpperCase()}</p>
            </div>
        </div>
        
        <div className="video_etails">
            <p className="video_title">{vid?.title}</p>
            <pre className="video_upload_time">31/12/2004</pre>
            <pre className="video_upload_time">5 views <div className="dot"></div> video uploaded 1 year ago</pre>
        </div>
     </div>
   </>
  )
}
VideoShowCase.propTypes = {
  vid: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      video_src: PropTypes.string,
      chanel: PropTypes.string,
      title: PropTypes.string,
      Uploader: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default VideoShowCase