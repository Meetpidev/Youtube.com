import { useState } from "react";
import "./comments.css";

export default function Displaycomments({Cmt_id,commentBody,userCommented}) {
  
    const [Id,setId] = useState("");
    const [Edit,setEdit] = useState(false);
    const [commentBdy,setcommentBdy] = useState("");

    

    let handleEdit = (Cmt_id,commentBody) => {
        setId(Cmt_id);
        setEdit(true);
        setcommentBdy(commentBody);
    }  
    let handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    }
    return(
        <>
        {
        Edit ? (
        <>
        <form className="comments_sub_form_comments" onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={(e) => setcommentBdy(e.target.value)}
            placeholder="Edit comment..."
            value={commentBdy}
            className="comment_ibox"
             />

            <input 
            type="submit" 
            value="Edit"
            className="comment_add_btn_comments" />

        </form>
        </>
    ) : ( <><p className="comment_body">{commentBody}</p></>)
    }
             <p className="usercommented">{userCommented}</p>
             <p className="Edit">
                <i onClick={()=>handleEdit(Cmt_id,commentBody)} style={{cursor:"pointer"}}>Edit</i>
                <i>Delete</i>
             </p>
        </>
    )
}