import React, { useState } from "react";

const CommentForm = ({ addComment, storyId }) => {
    const [inputVal, setInputVal] = useState("");

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(inputVal, storyId);
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