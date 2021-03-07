import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";

const PostPage = ({ stories, updateStory, deleteStory, addComment, deleteComment }) => {
    const { postId } = useParams();
    const currentStory = stories.filter(story => story.id === postId)[0];
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditState = () => {
        setIsEditing(isEditing => !isEditing);
    }

    const renderPostDetail = () => {
        return <PostDetail story={currentStory} toggleEditState={toggleEditState} addComment={addComment} deleteComment={deleteComment} />;
    }

    const renderEditForm = () => {
        return <PostForm story={currentStory} updateStory={updateStory} formType="edit" toggleEditState={toggleEditState} />
    }

    return (
        <div className="PostPage">
            <div className="PostPage d-flex justify-content-between">
                <div>
                <h2>{currentStory.title}</h2>
                <p><i>{currentStory.description}</i></p>
                </div>
                <div className="PostDisplay-edit-area">
                <i className="fas fa-edit fa-2x text-primary mx-1 i-btn" onClick={toggleEditState} />
                <i className="fas fa-times fa-2x text-danger mx-1 i-btn" onClick={() => deleteStory(currentStory.id)}/>
                </div>
            </div>
            {
                isEditing ? renderEditForm() : renderPostDetail()
            }
        </div>
    );
}

export default PostPage;