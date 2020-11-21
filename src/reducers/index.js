import { combineReducers } from "redux";

export default combineReducers({
  DummyStateProperty: () => {
    return "Dummy-reducer returning dummy-state-value";
  },
});
