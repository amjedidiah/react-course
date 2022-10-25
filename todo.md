# ToDo

- [ ] Add Tests for Crwn-Clothing

- [ ] Research for and get the CSS frameworks with the best implementation of the semantic markup.

- [ ] Take GatsBy course on Udemy, possibly from ZTM

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
