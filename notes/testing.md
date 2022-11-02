# Testing In React

## Types of Tests

### Unit Tests

These are written to test small pure function/method/component by itself

### Integration Tests

These are written to test how multiple functions/methods/components work well together

### Automation Tests(End to End Tests)

These are written to test how the application works as a whole, either by using bots, simulating user actions, using a headless browser(a browser without a GUI, allowing web navigation through the CLI, e.g: Puppeteer) or a human tester. e.g: Cypress, Test Cafe, Selenium

> Expensive to implement and mostly found in bigger companies
> Frequency of these tests should be minimal, because they are costly

## Components Of Testing

### Testing Library

This is a library that provides the necessary scaffolding and set of tools to test functions/methods/components. e.g: Jasmine, Jest, Mocha

### Assertion Library

This is a library that provides the methods to assert the results of the tests. e.g: Jasmine, Jest, Chai(paired with Mocha)

> BDD: Behaviour Driven Development

### Test Runner

Provides a runtime to run the tests. e.g: Jasmine, Jest, Mocha, Karma.js (allows to run test in the browser), JSDOM

### Mock, Spies and Stubs

- Spies: A spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. There are some limitations to how a spy can be used. It cannot be used to change the behaviour of a function, as it is only a record of the calls made to the function.

- Stubs: A stub is a function (spies are functions) with pre-programmed behaviour. When a stub is used in place of a function, the pre-programmed behaviour takes the place of the real function. Stubs are used to test the code under test in isolation.

- Mock: A mock is an object pre-programmed with expectations which form a specification of the calls it is expected to receive. A mock object verifies that the code under test calls the methods it expects to be called.

> e.g: Jasmine, Jest, Sinon.js(can be used as a Stub to create a server)

### Test(Code) Coverage

This is a measure of how much of the code is covered by the tests. e.g: Istanbul, Jest(has Istanbul running under the hood)

> _Mocha_ is usually combined with _Chai_ for assertions and _Sinon_ for spies, stubs and mocks

## Notes on Testing

- Prefer writing integration tests with everything working together. Render a `<Provider>` with a real store instance wrapping the components being tested. Interactions with the page being tested should use real Redux logic, with API calls mocked out so app code doesn't have to change, and assert that the UI is updated appropriately.

- If needed, use basic unit tests for pure functions such as particularly complex reducers or selectors. However, in many cases, these are just implementation details that are covered by integration tests instead.

- Do not try to mock selector functions or the React-Redux hooks! Mocking imports from libraries is fragile, and doesn't give you confidence that your actual app code is working.

- RTL to test UI, Mock Server WOrker(MSW) to mocking network requests

- Reducers are pure functions that return the new state after applying the action to the previous state. In the majority of cases, the reducer is an implementation detail that does not need explicit tests

```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: number
  text: string
  completed: boolean
}

const initialState: Todo[] = [{ text: 'Use Redux', completed: false, id: 0 }]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<string>) {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.payload
      })
    }
  }
})

export const { todoAdded } = todosSlice.actions

export default todosSlice.reducer 
```

```tsx
import reducer, { todoAdded, Todo } from './todosSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual([
    { text: 'Use Redux', completed: false, id: 0 }
  ])
})

test('should handle a todo being added to an empty list', () => {
  const previousState: Todo[] = []

  expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
    { text: 'Run the tests', completed: false, id: 0 }
  ])
})

test('should handle a todo being added to an existing list', () => {
  const previousState: Todo[] = [
    { text: 'Run the tests', completed: true, id: 0 }
  ]

  expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
    { text: 'Run the tests', completed: true, id: 0 },
    { text: 'Use Redux', completed: false, id: 1 }
  ])
})
```

- Selectors are also generally pure functions, and thus can be tested using the same basic approach as reducers: set up an initial value, call the selector function with those inputs, and assert that the result matches the expected output.

    > However, since most selectors are memoized to remember their last inputs, you may need to watch for cases where a selector is returning a cached value when you expected it to generate a new one depending on where it's being used in the test.

- Action creators: Don't feel the need to test action creators by themselves (the Redux Toolkit maintainers have already done that for you!).

## Resources

- [ ] [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)

- [Nock](https://www.npmjs.com/package/nock): HTTP server mocking and expectations library for Node.js

- [Supertest](https://www.npmjs.com/package/supertest): HTTP assertions made easy via superagent
