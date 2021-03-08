import { v4 as uuidv4 } from 'uuid';
import starterBlogs from "../starterBlogs";
const INITIAL_STATE = starterBlogs;

function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD_STORY": {
          console.log("adding story...");
          return [...state, action.story];
        }


        case "UPDATE_STORY": {
          console.log("updating story...");
          let storiesCopy = [...state];
          storiesCopy = storiesCopy.map(story => {
            if (story.id === action.formData.id) {
              return action.formData;
            } else {
              return story;
            }
          })
          return storiesCopy;
        }


        case "DELETE_STORY": {
          console.log("deleting story...");
          return state.filter(story => story.id !== action.storyId);
        }


        case "ADD_COMMENT": {
          console.log("adding comment...");
          const storiesCopy = [...state];
          for (const story of storiesCopy) {
            if (story.id === action.storyId) {
              story.comments.push({id: uuidv4(), comment: action.comment});
            }
          }
          return storiesCopy;
        }


        case "DELETE_COMMENT": {
          console.log("deleting comment...");
          const storiesCopy = [...state];
          for (const story of storiesCopy) {
            if (story.id === action.storyId) {
              story.comments = story.comments.filter(comment => comment.id !== action.commentId)
            }
          }
          return storiesCopy;
        }


        default: {
          console.log("default case...");
          return state;
        }
    }
}

export default rootReducer;