import React from "react";
import CommentSection from "./CommentSection";

const PostDetail = ({ story, addComment, deleteComment }) => {
    return (
    <div className="PostDetail">

      <p>{story.body}</p>
          <hr/>
      <CommentSection story={story} addComment={addComment} deleteComment={deleteComment} />

    </div>
    );
}

export default PostDetail;