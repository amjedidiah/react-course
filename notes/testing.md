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

## Resources

- [ ] [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)

- [Nock](https://www.npmjs.com/package/nock): HTTP server mocking and expectations library for Node.js

- [Supertest](https://www.npmjs.com/package/supertest): HTTP assertions made easy via superagent
