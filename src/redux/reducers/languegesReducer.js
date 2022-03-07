import { SET_LANGUEGE } from "../actions/type";

const initalState = {
  appLanguege: {
    country: "English",
    value: "en",
    id: "1",
  },
};

export default langueges = (state = initalState, action = {}) => {
  switch (action.type) {
    case SET_LANGUEGE:
      const { appLanguege } = action.payload;
      return {
        ...state,
        appLanguege: appLanguege,
      };
      break;
    default:
      return state;
  }
};
