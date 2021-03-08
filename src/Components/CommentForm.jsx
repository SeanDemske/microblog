import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../Reducers/actionTypes";

const CommentForm = ({ storyId }) => {
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState("");

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ADD_COMMENT, storyId, comment: inputVal});
    }

    return (
        <form className="CommentForm" onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                required
                id="comment-form"
                name="title"
                className="form-control" 
                placeholder="Comment" 
                value={inputVal} 
                onChange={handleChange} />
            </div>
            <button className="btn btn-primary">Post Comment</button>
        </form>
    );
}

export default CommentForm;