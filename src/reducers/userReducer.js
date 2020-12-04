const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      const newState = [...state, action.payload];
      return newState;

    default:
      return state;
  }
};

export default userReducer;
