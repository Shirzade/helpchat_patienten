import { SET_UUID, SET_TOKEN } from "../actions/type";

const initalState = {
  token: "",
  uuid: "",
};

export default user = (state = initalState, action = {}) => {
  switch (action.type) {
    case SET_UUID:
      const { uuid } = action.payload;
      return {
        ...state,
        uuid: uuid,
      };
      break;
    case SET_TOKEN:
      const { token } = action.payload;
      return {
        ...state,
        token: token,
      };
    default:
      return state;
  }
};
