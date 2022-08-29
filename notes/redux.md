# Redux

## Difference Between Redux & Context API

- Accessibility
  -- Context can be used to just wrap the compoents needing it.
  -- Redux will always wrap the whole app: global state management.
- Flow of data
  -- Context: each context has its own dispatch and reducers that it accesses separately from other contexts.
  -- Redux: all reducers are combined into one reducer, which is accessibile by all components. One disptch function then updates the different reducers.

## ToDo

- `yarn add redux react-redux redux-logger`
- redux directory
  -- reducers/root.reducer.js

  ```js
  import { combineReducers } from "redux";
  import userReducer from "./user.reducer";

  export const rootReducer = combineReducers({
    user: userReducer,
  });
  ```
