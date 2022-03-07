import {
  ACTIVE_BUTTON,
  SET_UUID,
  SHOW_LOADING,
  SET_LANGUEGE,
  SET_TOKEN,
  SELECT_SERVICE,
} from "./type";

// ---  list actions ---

export const activeButton = (active) => ({
  type: ACTIVE_BUTTON,
  payload: {
    active: active,
  },
});

export const setUserId = (uuid) => ({
  type: SET_UUID,
  payload: {
    uuid: uuid,
  },
});

export const showLoading = (showLoadingFlag) => ({
  type: SHOW_LOADING,
  payload: {
    showLoadingFlag: showLoadingFlag,
  },
});

export const setLanguege = (appLanguege) => ({
  type: SET_LANGUEGE,
  payload: {
    appLanguege: appLanguege,
  },
});

export const setTokenBed = (token) => ({
  type: SET_TOKEN,
  payload: {
    token: token,
  },
});

export const selectedServiceId = (serviceId) => ({
  type: SELECT_SERVICE,
  payload: {
    serviceId: serviceId,
  },
});
