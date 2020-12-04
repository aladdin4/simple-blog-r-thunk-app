import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

//action creators are functions that receive raw data from events handler and return consumable reducer-friendly objects.

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPost());

    _.chain(getState().Posts)
      .map("userId")
      .uniq()
      .forEach((user) => {
        dispatch(fetchUser(user));
      })
      .value();
  };
};

//this is named export not default, so it have to be imported through { ..name.. }
export const fetchPost = () => {
  //in case the returned action was a  function() not object{} thunk will call it , and if returned function; thunk will call it, too, and so on and so forth, and each time will be called with dispatch and getState as arguments
  //it will have to call dispatch(action) manually
  return async function (dispatch, getState) {
    const response = await jsonPlaceHolder.get("posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

//another named export, an async action creator for getting a user according to the id it's called with from within the <Component/>.
export const fetchUser = (id) => {
  //our action creator is async, so it should be returning a function to use the privilege of thunk to call the inner function with the store's dispatch
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get("users/" + id);

    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};

/*

//
////
//
////
//


//the memoized version solution for our overFetching issue


export const fetchUser = (id) => {
  //our action creator is async, so it should be returning a function to use the privilege of thunk to call the inner function with the store's dispatch
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(
  //the first argument of memoize should be the function that will be called and it's result is to be memoized, so it will be called as little times as possible

  async (id, dispatch) => {
    const response = await jsonPlaceHolder.get("users/" + id);
    console.log("inside the memoized function");
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  }
);
*/
