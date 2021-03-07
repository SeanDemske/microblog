import React from "react";
import truncateStr from "../Utils/truncateStr";
import { NavLink } from "react-router-dom";

const StoryCard = ({ story }) => {
    return (
        <div className="StoryCard">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{story.description}</h6>
                    <p className="card-text">{truncateStr(story.body, 100)}</p>
                    <NavLink to={`/${story.id}`}>Read Story</NavLink>
                </div>
            </div>
        </div>
    );
}

export default StoryCard;