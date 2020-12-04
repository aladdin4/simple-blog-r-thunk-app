//we have to initialize the state we are returning, because we can't have Undef. state property, right?
export default function (state = [], action) {
  //
  //
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
}
