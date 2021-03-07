import React from "react";
import StoryCard from "./StoryCard";

const HomePage = ({ stories }) => {
    return (
        <div className="Home">
            {stories.map(story => <StoryCard story={story} key={story.id} />)}
        </div>
    );
}

export default HomePage;