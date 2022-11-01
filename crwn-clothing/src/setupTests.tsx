// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

// Mock Store
const mockStore = configureStore([thunkMiddleware]);
const initialState = {
  user: {
    currentUser: null,
    error: null,
    isLoading: false,
  },
};
export const store = mockStore(initialState);
const storeDispatch = store.dispatch;
store.dispatch = jest.fn(storeDispatch);

// Render component with Store
export const renderWithStore = (Component: React.FC) =>
  render(
    <Provider store={store}>
      <Component />
    </Provider>
  );

// Mock Alert
export const mockAlert = jest.fn();
global.alert = mockAlert;