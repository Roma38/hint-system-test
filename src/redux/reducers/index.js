import { combineReducers } from "redux";
import { usersReduser } from "./users";

const rootReduser = combineReducers({
  users: usersReduser
});

export default rootReduser;