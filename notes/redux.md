# Redux

## Difference Between Redux & Context API

- Accessibility
  -- Context can be used to just wrap the components needing it.
  -- Redux will always wrap the whole app: global state management.
- Flow of data
  -- Context: each context has its own dispatch and reducers that it accesses separately from other contexts.
  -- Redux: all reducers are combined into one reducer, which is accessible by all components. One dispatch function then updates the different reducers.

## Currying

- A function receiving another function

### Sample Redux Middleware Function

```js
const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
```

## Memoization Using Reselect Library

## Thunking with Redux Thunk Middleware

- Thunking is allowing functions to be passed as actions

## Sagas

- Runs after reducers have been updated

### Sagas Methods

- `yield`: return result
- `call`: similar to await, resolves an async function
- `all`: call a number of async functions
- `put`: similar to dispatch

## Generator Functions

- [Generator Function Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
