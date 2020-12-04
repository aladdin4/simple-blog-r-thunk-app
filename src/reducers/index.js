//the index.js file in reducers is where we use combineReducers() for all the other filesin the same folder.

import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  //keys are root-state props, values are their values provided by the reducer
  Posts: postsReducer,
  Users: userReducer,
});
