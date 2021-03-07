import React from "react";
import CommentComponent from "./CommentComponent";
import CommentForm from "./CommentForm";

const CommentSection = ({ story, addComment, deleteComment }) => {
    if (!story.comments) story.comments = [];
    return (
        <main className="CommentSection mb-4">
            <h2>Comments</h2>
            {
                story.comments.map(comment => <CommentComponent comment={comment} key={comment.id} deleteComment={deleteComment} storyId={story.id} />)
            }
            <CommentForm addComment={addComment} storyId={story.id} />
        </main>
    );
}

export default CommentSection;