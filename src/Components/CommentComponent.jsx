import React from "react";

const CommentComponent = ({ comment, storyId, deleteComment }) => {
    const handleDelete = () => {
        deleteComment(comment.id, storyId);
    }

    return (
        <div className="CommentComponent">
            <p><i onClick={handleDelete} className="fa fa-times text-danger mr-2 i-btn"/> {comment.comment}</p>
        </div>
    );
}

export default CommentComponent;