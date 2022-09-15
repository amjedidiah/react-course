import userActionTypes from "redux/types/user.type";

export const authenticateUserFulfilled = (user) => ({
  type: userActionTypes.AUTHENTICATE_USER_FULFILLED,
  payload: user,
});

export const authenticateUserRejected = (error) => ({
  type: userActionTypes.AUTHENTICATE_USER_REJECTED,
  payload: error,
});

export const authenticateUserPending = () => ({
  type: userActionTypes.AUTHENTICATE_USER_PENDING,
});

export const emailLoginPending = (email, password) => ({
  type: userActionTypes.EMAIL_LOGIN_PENDING,
  payload: { email, password },
});

export const emailRegisterPending = ({ email, password, displayName }) => ({
  type: userActionTypes.EMAIL_REGISTER_PENDING,
  payload: { email, password, displayName },
});

export const logoutPending = () => ({
  type: userActionTypes.LOGOUT_PENDING,
});

export const logoutFulfilled = () => ({
  type: userActionTypes.LOGOUT_FULFILLED,
});

export const logoutRejected = (error) => ({
  type: userActionTypes.LOGOUT_REJECTED,
  payload: error,
});
