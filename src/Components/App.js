import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Route, NavLink, Switch, useHistory } from "react-router-dom";
import HomePage from "./HomePage";
import NewPostPage from "./NewPostPage";
import PostPage from "./PostPage";
import './App.css';
import starterBlogs from "../starterBlogs";

function App() {
  const history = useHistory();
  const INITIAL_STATE = starterBlogs;
  const [stories, setStories] = useState(INITIAL_STATE);

  const addStory = (formData) => {
    setStories([
      ...stories, formData
    ]);
  }

  const updateStory = (formData) => {
    let storiesCopy = [...stories];
    storiesCopy = storiesCopy.map(story => {
      if (story.id === formData.id) {
        return formData;
      } else {
        return story;
      }
    })
    setStories(storiesCopy);
  }

  const deleteStory = (storyId) => {
    setStories(stories => {
      return stories.filter(story => story.id !== storyId);
    });
    history.push("/");
  }

  const addComment = (comment, storyId) => {
    const storiesCopy = [...stories];
    for (const story of storiesCopy) {
      if (story.id === storyId) {
        story.comments.push({id: uuidv4(), comment});
      }
    }
    setStories(storiesCopy);
  }

  const deleteComment = (commentId, storyId) => {
    const storiesCopy = [...stories];
    for (const story of storiesCopy) {
      if (story.id === storyId) {
        story.comments = story.comments.filter(comment => comment.id !== commentId)
      }
    }
    setStories(storiesCopy);
  }

  return (
    <div className="App container">

      {/* HEADER */}
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <nav>
          <NavLink exact to="/">Blog</NavLink>
          <NavLink exact to="/new">Add a new post</NavLink>
        </nav>
      </header>

      {/* ROUTES */}
      <Switch>
        <Route exact path="/new">
          <NewPostPage addStory={addStory} />
        </Route>
        <Route exact path="/">
          <HomePage stories={stories} />
        </Route>
        <Route exact path="/:postId">
          <PostPage stories={stories} updateStory={updateStory} deleteStory={deleteStory} addComment={addComment} deleteComment={deleteComment} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
