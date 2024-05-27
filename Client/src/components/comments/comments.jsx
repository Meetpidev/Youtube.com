import Displaycomments from "./displaycomments";
import { useState } from "react";
import "./comments.css";

function Comments() {

    const [commentText, setCommentText] = useState("");

  const commetsList = [
    {
      _id:"1",
      commentBody: "hello",
      userCommented: "abc",
    },
    {
      _id:"2",
      commentBody: "hiii",
      userCommented: "xyz",
    },
  ];
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
        <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="add comment..."
          value={commentText}
          className="comment_ibox"
        />
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comments">
      {
        commetsList.map((m)=>{
          return (
            <Displaycomments 
              Cmt_id = {m._id} 
              commentBody={m.commentBody} 
              userCommented={m.userCommented}
              key={m._id}
              ></Displaycomments>
          )
        })
      }
      
     </div>
    </>
  )
}

export default Comments