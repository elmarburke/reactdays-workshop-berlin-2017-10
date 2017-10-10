import { combineReducers } from "redux";
import statusReducer from "./status/reducer";

export default combineReducers({
  status: statusReducer
});
