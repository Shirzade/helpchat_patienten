import { ACTIVE_BUTTON, SELECT_SERVICE } from "../actions/type";

const initalState = {
  active: "",
  serviceId: 0,
};

export default service = (state = initalState, action = {}) => {
  switch (action.type) {
    case ACTIVE_BUTTON:
      const { active } = action.payload;
      return {
        ...state,
        active: active,
      };
      break;
    case SELECT_SERVICE:
      const { serviceId } = action.payload;
      return {
        ...state,
        serviceId: serviceId,
      };
    default:
      return state;
  }
};
