import VideoShowCase from "../VideoShowCase/VideoShowCase";
import PropTypes from 'prop-types'; 
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import "./ShowVideo.css";

function ShowVideo({vids}) {

  // const [points, setPoints] = useState(0);

  // useEffect(() => {
   
  //   axios.get('/user/points')
  //     .then(response => {
  //       setPoints(response.data.points);
  //     })
  //     .catch(error => {
  //       console.error("There was an error fetching the user points!", error);
  //     });
  // }, []);

  // const handleVideoWatched = () => {
  //   const newPoints = points + 5;
  //   setPoints(newPoints);

   
  //   axios.post('/user/points', { points: newPoints })
  //     .then(response => {
  //       console.log('Points updated successfully',response);
  //     })
  //     .catch(error => {
  //       console.error('Error updating points:', error);
  //     });
  // };onVideoWatched={handleVideoWatched}
  
  return (
   <>
      <div className='show_container'>
        {
          vids?.map(vi=>
            {
                return (
                    <div key={vi._id} className="video_box">
                        <VideoShowCase vid={vi} />
                    </div>
                )
            })  
        }
    </div>
    {/* <div className="user_points">
        <p>Total Points: {points}</p>
      </div> */}
   </>
  )
}
ShowVideo.propTypes = {
  vids: PropTypes.arrayOf(
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

export default ShowVideo