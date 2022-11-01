# ToDo

## Tasks

- [ ] Add Tests for Crwn-Clothing

- [ ] Protected routes for Crwn-clothing

- [ ] Update all forms to use [`react-hook-form`](https://react-hook-form.com/)

- [ ] [Redux Toolkit’s new listener middleware vs. Redux-Saga](https://blog.logrocket.com/redux-toolkits-new-listener-middleware-vs-redux-saga/)

- [ ] Research for and get the CSS frameworks with the best implementation of the semantic markup.

## Further Reading

- [ ] [Learn GatsBy](https://www.gatsbyjs.org/tutorial/)

- [ ] [Read up React documentation](https://reactjs.org/docs/getting-started.html)

- [ ] [Read up Create React App documentation](https://create-react-app.dev/)

- [ ] [Read up React Router documentation](https://reactrouter.com/docs/en/v6)

- [ ] [Firebase docs](https://firebase.google.com/docs/)

- [ ] [Read up React Context documentation](https://reactjs.org/docs/context.html)

- [ ] [Read up React Hooks documentation](https://reactjs.org/docs/hooks-intro.html)

- [ ] [Read up Styled Components documentation](https://styled-components.com/docs/basics)

## Temp

- Testing Reducers: test as pure function

- Testing Actions

```tsx
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureStore([thunkMiddleware]);

it("handles requesting robots API", () => {
  const store = mockStore();
  store.dispatch(requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
```
