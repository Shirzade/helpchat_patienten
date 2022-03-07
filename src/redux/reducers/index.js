import { combineReducers } from "redux";
import service from "../reducers/serviceReduser";
import user from "../reducers/userReduser";
import loading from "../reducers/loadingReducer";
import langueges from "../reducers/languegesReducer";

// ---- list of reducers ----
export default combineReducers({
  service,
  user,
  loading,
  langueges,
});
