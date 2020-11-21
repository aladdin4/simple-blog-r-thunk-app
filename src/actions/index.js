import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//action creators are functions that receive raw data from events handler and return consumable reucder-friendly objects.

//this is named export not default, so it have to be imported through { ..name.. }

export const fetchPost = () => {
  //in case the returned action was a  function() not object{} thunk will call it , and if returned function; thunk will call it, too, and so on and so forth, and each time will be called with dispatch and getState as arguments
  //it will have to call dispatch(action) manually
  return async function (dispatch, getstate) {
    const response = await jsonPlaceHolder.get("posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response,
    });
  };
};
