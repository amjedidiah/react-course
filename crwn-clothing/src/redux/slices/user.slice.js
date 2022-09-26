import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    authenticateUserPending: (state) => {
      state.isLoading = true;
      state.error = null
      state.currentUser = null
    },
    authenticateUserFulfilled: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    authenticateUserRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.currentUser = null;
    },
    logoutRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.currentUser = null;
    },
    logoutFulfilled: (state) => {
      state.isLoading = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});

export const {
  authenticateUserFulfilled,
  authenticateUserRejected,
  authenticateUserPending,
  logoutRejected,
  logoutFulfilled,
} = userSlice.actions;

export const emailLoginPending = (email, password) =>
  userSlice.actions.authenticateUserPending({ email, password });

export const emailRegisterPending = ({ email, password, displayName }) =>
  userSlice.actions.authenticateUserPending({ email, password, displayName });

export const logoutPending = () => userSlice.actions.authenticateUserPending();

export const selectCurrentUser = (state) => state.user.currentUser;

export default userSlice.reducer;
