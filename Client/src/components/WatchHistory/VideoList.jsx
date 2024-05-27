import ShowWatchhistory from "../ShowWatchHistory/ShowWatchhistory"


function VideoLis({page,VideoList}) {



  return (
    <>
       {
        VideoList.map(m=>{
          return(
            <> 
              <ShowWatchhistory videoId={m._id} key={m._id}></ShowWatchhistory>
            </>
          )
        })
       }
    </>
  )
}

export default VideoLis