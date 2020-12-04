//the root script

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers/index";

//this is the only place where we use thunk, then it's called each tme we dispatch an action object.
const store = createStore(reducers, applyMiddleware(thunk));
//
////
//

//in the main index.js file we create the provider that will contain our main <App /> component and send the store to it as a prop.

//the store will be created with the reducer(), which itself was built by the composition strategy (each reducer will handel a single property of the state tree and the combineReducers() will combine them).

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
