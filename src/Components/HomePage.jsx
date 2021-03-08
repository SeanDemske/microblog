import React from "react";
import StoryCard from "./StoryCard";
import { useSelector } from "react-redux";

const HomePage = () => {
    const stories = useSelector(st => st);
    return (
        <div className="Home">
            {stories.map(story => <StoryCard story={story} key={story.id} />)}
        </div>
    );
}

export default HomePage;