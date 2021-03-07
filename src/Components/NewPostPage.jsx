import React from "react";
import PostForm from "./PostForm";

const NewPostPage = ({ addStory }) => {
    return (
        <div className="NewPost">
            <h3>New Post</h3>
            <PostForm addStory={addStory} />
        </div>
    );
}

export default NewPostPage;