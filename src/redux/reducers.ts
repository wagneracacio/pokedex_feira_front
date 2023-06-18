import { combineReducers } from "redux";
import Auth from "./features/auth/auth-slice";
import User from "./features/user/user-slice";
import Event from "./features/event/event-slice";
export default combineReducers({
  Auth,
  User,
  Event,
});
