import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";
import { DELETE_STORY } from "../Reducers/actionTypes";

const PostPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { postId } = useParams();
    const stories = useSelector(st => st);
    const currentStory = stories.filter(story => story.id === postId)[0];
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditState = () => {
        setIsEditing(isEditing => !isEditing);
    }

    const deleteStory = () => {
        dispatch({type: DELETE_STORY, storyId: currentStory.id});
        history.push("/");
    }

    const renderPostDetail = () => {
        return <PostDetail story={currentStory} toggleEditState={toggleEditState} />;
    }

    const renderEditForm = () => {
        return <PostForm story={currentStory} formType="edit" toggleEditState={toggleEditState} />
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
                <i className="fas fa-times fa-2x text-danger mx-1 i-btn" onClick={deleteStory}/>
                </div>
            </div>
            {
                isEditing ? renderEditForm() : renderPostDetail()
            }
        </div>
    );
}

export default PostPage;