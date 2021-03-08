import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_COMMENT } from "../Reducers/actionTypes";

const CommentComponent = ({ comment, storyId, deleteComment }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({type: DELETE_COMMENT, storyId, commentId: comment.id});
    }

    return (
        <div className="CommentComponent">
            <p><i onClick={handleDelete} className="fa fa-times text-danger mr-2 i-btn"/> {comment.comment}</p>
        </div>
    );
}

export default CommentComponent;