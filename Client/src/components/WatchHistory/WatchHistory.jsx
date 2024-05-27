import VideoList from "./VideoList.jsx";
import "./WatchHistory.css";

function WatchHistory({page,video_list}) {

  let style1 = {display:"none"}
  let style2 ={display:"inlineBlock"}
  return (
    <>
       <div className="container_page_app">
                <div className="container2_page_app">
                   <p className="det">
                      <div className="watch_list_box leftside_whl"
                        style={page === "" ? (style1) : (style2)}>
                          
                          {
                            page === "History" ? (
                              <>
                                <b>Your {page} Shown Here</b>
                                <div className="clear_history_btn">Clear History</div>
                              </> ) : (
                                <>
                                  {page === "Liked Videos" ? (
                                    <>
                                    <b>Your {page} Shown Here</b>
                                    <div className="clear_history_btn">Clear All</div>
                                    </> ) : ( 
                                      <>
                                        {page === "Watch Later" ? (
                                          <>
                                          <b>Your {page} Shown Here</b>
                                          <div className="clear_history_btn">Delete All</div>
                                          </> ) : ( <>
                                           {page==="" ? (<><div style={{display:"none"}}></div></>) : (<><div  style={{display:"none"}}></div></>)} 
                                          </>)}
                                      </>)}
                                </>)
                          }
                            
                      </div>

                       <div className="right_side">
                           <h2>{page}</h2>
                             <div className="video_list">
                                <VideoList page={page} VideoList={video_list}></VideoList>
                             </div>
                       </div>
                   </p>
                </div>
        </div>
    </>
  )
}

export default WatchHistory