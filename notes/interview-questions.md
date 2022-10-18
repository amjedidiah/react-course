# Interview Questions

## What is React?

> A JS library for building User Interfaces

- Developed by Facebook in 2011, and open-sourced in 2015
- Follows component based approach to build reusable UI components
-

## What are the features of React?

- JSX
- Components
- Virtual DOM
- One-way data binding/flow
- High performance
- Server-side rendering

## What is JSX?

> JSX is a syntax extension of JavaScript, used with React to describe what the UI should look like.

- It is similar to a template language, but it has full power of JavaScript.
- It gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.
- It allows us write HTML structures in the same file as JavaScript code.

## What is a Component?

> A component splits the UI into independent, reusable parts that can be processed separately

- It is the building block of React applications

## What is Virtual DOM?

> Virtual DOM is a programming concept where an ideal, or “virtual” lightweight representation of a UI is kept in memory and synced with the “real” DOM when the state of an object changes.
> It is a node tree created out of the React components that lists the elements, their attributes and content as an object and their properties.

- It only updates the part of the DOM that was changed, resulting in **high performance**.

## What is one-way data binding/flow?

> One-way data binding is a programming concept where the view is dependent on the model. The model is the single source of truth and the view is rendered based on the model.

- Parent components pass data to their children and not the other way around.
- Keeps everything modular and fast

## Can web browsers read JSX directly?

> No, it needs to be transformed to regular JavaScript first.

- Transpilers like babel are used.
- Transpilers (also called transcompilers) in JavaScript are source-to-source compilers that transform source code in non-JavaScript languages (CoffeeScript, TypeScript, LiveScript, etc.) or in modern JavaScript versions (ES2015, ES2017, ESNext, etc.) to equivalent JavaScript source code that meets some conditions (browser compatible, minified, strict, etc.)
- Most transpilers use Abstract Syntax Tree (AST) as intermediate format while processing source file, transforming syntax, performing optimizations.

## WHy use React instead of other frameworks, like Angular?

- Easy creation of dynamic applications: as it provides less coding and more functionality
- Improved performance: as it uses virtual DOM
- Reusable components and code built in JSX
- Unidirectional data flow: makes it easier to debug errors and know where a problem occurs
- Dedicated tools for easy debugging: chrome extensions
- Can be conveniently used ont he client and server side
- Easy to integrate with other frameworks
- Makes it easy to write UI test cases

## What are the limitations of React?

- React is a library, not a framework
- Coding gets complex as it uses inline templating and JSX

## What is the difference between the ES6 and ES5 standards?

- Components and functions

    ```jsx
    // ES5
    var MyComponent = React.createClass({
        render: function() {
            return
    
    <h3>Hello Edureka!</h3>
    ;
        }
    });
    
    // ES6
    class MyComponent extends React.Component {
        render() {
            return
    
    <h3>Hello Edureka!</h3>
    ;
        }
    }
    ```

- exports vs export

    ```jsx
    // ES5
    module.exports = Component;

    // ES6
    export default Component;
    ```

- require v. import

    ```jsx
    // ES5
    var React = require('react');

    // ES6
    import React from 'react';
    ```

- props

    ```jsx
    // ES5
    var App = React.createClass({
        propTypes: { name: React.PropTypes.string },
        render: function() {
            return
    
    <h3>Hello, {this.props.name}!</h3>
    ;
        }
    });
    
    // ES6
    class App extends React.Component {
        render() {
            return
    
    <h3>Hello, {this.props.name}!</h3>
    ;
        }
    }
    ```

- state

    ```jsx
    // ES5
    var App = React.createClass({
        getInitialState: function() {
            return { name: 'world' };
        },
        render: function() {
            return
    
    <h3>Hello, {this.state.name}!</h3>
    ;
        }
    });
    
    // ES6
    class App extends React.Component {
        constructor() {
            super();
            this.state = { name: 'world' };
        }
        render() {
            return
    
    <h3>Hello, {this.state.name}!</h3>
    ;
        }
    }
    ```

## How do you create a React app?

- Install NodeJS
- Install `create-react-app` package
- Run `create-react-app my-app`
- Run `npm start` to start the app

## WHat is an event in React?

> A reaction to an action that a user or system may trigger.

- React events are named using camelCase, rather than lowercase.
- React events are passed as functions instead of string

## What are synthetic events in React?

> Events that combine the response of different browser's native events into one API, ensuring the event(s)/application(s) are consistent across different browsers. e.g `preventDefault`

## Why is there a need for keys in React lists?

> Unique identifier(either a number or string) used to identify which VDOM elements have changed, been updated or deleted from the list so as to re-render only the updated elements, thus leading to increased performance.

## What are forms in React?

> A means to interact with the React application

## How do you write comments in React?

> Single line comments are written using `{//}`
> Multi-line comments are written using `{/* */}`

## What is an arrow function and how is it used in React?

> It is a short-hand way of writing a function expression
> It allows to bind the context of the component properly(since auto-binding is not available in ES6 classes)
> It prevents bugs caused by the use of `this` in React callbacks and event handlers
> Mostly useful for working with Higer Order Functions

## How is React different from React Native?

|Features| React | React Native |
|--------|-------|--------------|
| Release | 2013 | 2015 |
| Platform | Web | Mobile |
| Compiles to HTML | Yes | No |
| Compiles to CSS | Yes | No |
| Prerequisites | JS, HTML, CSS | React.js |

## How is React different from Angular?

| Features | React | Angular |
|----------|-------|---------|
| Release | 2013 | 2010 |
| Author | Facebook | Google |
| Architecture | View layer of MVC(component-based) | Complete MVC |
| DOM | Virtual DOM | Real DOM |
| Data binding | Uni-directional-way | Bi-directional |
| Rendering | Server-side | Client-side |
| Performance | Faster due to VDOM | Comparatively slow |
| Debugging | Compile time | Run time |

## What are the type of Components in React?

> Stateful components: components that hold and manage their own state
> Stateless components: components that don't hold and manage their own state

## Differentiate b/w Stateful and Stateless components

| Stateful Components | Stateless Components |
|---------------------|----------------------|
| Stores info about component's state change in memory | Calculates internal state of component |
| Have authority to change state | Don't have authority to change state |
| Contains knowledge of past, current and possible future changes in state | Contains no knowledge of past, current and possible future changes in state |
| Send down props to Stateless components when they notify them about requirement of state change  | Receive props from Stateful components and treat them as callback functions |

## What is the use of the `render()` method in React?

> It is used to return a single React element which is the representation of the native DOM component

- It must be kept pure, returning the same result each time it is invoked

## What is a state in React?

> A built-in React mutable object that holds information that may change over the lifetime of a component in response to user actions, network responses, system-generated events, etc, and determines how a component renders & behaves

- Whenever it changes, the component re-renders itself

## What are props in react?

> A built-in React read-only pure/immutable object that provides a means to pass data from between components, just like function arguments

## What are the differences between state and props?

| Features | State | Props |
|----------|-------|-------|
| Use | Holds info about the component | Holds info passed from another component |
| Mutability(changes inside component) | Is mutable(Yes) | Are immutable(No) |
| Read-only | Can be changed | Are read-only |
| Child components | Child component cannot access state | Child component can access props |
| Stateless components | Cannot use state | Can use props |
| Can receive initial value from parent component | Yes | Yes |
| Parent component can change value | No | Yes |
| Set default values inside the component | Yes | Yes |
| Set initial value for child component | Yes | Yes |
| Changes inside child component | No | Yes |

## What is HOC in React?

> A higher-order component is a pure function that takes a component and returns a new component. e.g: `withRouter`

```jsx
const EnhancedComponent = withRouter(MyComponent);
```

## What can be done with HOCs?

- Code reuse, logic and bootstrap abstraction
- Render hijacking
- State abstraction and manipulation
- Props manipulation

## What is a Pre Function?

> A function whose return value depends solely on the values of its arguments

## What are Pure Components?

> A component that renders the same result given the same props and state

## What are the differences between class and functional components?

| Features | Class Components | Functional Components |
|----------|------------------|------------------------|
| Lifecycle methods | Are clearly defined | Lifecycle methods are implemented using hooks |

## What are the different phases of the React component's lifecycle?

- Initial rendering phase: before component gets to DOM
- Updating phase: after component has been added to the DOM
- Unmounting phase: where component is removed from the DOM

## Explain the Lifecycle methods of components(7)

- `componentWillMount()`: called before the component is mounted/rendered on the client/server-side
- `componentDidMount()`: called after the component is mounted(rendered and placed on the DOM) for the first time
- `componentWillReceiveProps()`: called when the component receives new props before another render is called
- `shouldComponentUpdate()`: when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.
- `componentWillUpdate()`: called before the component is updated
- `componentDidUpdate()`: called after the component is updated and re-rendered
- `componentWillUnmount()`: called before the component is unmounted and destroyed

## What were the major problems with MVC framework?

- DOM manipulation was very expensive
- Applications were slow and inefficient
- There was huge memory wastage
- Because of circular dependencies,a  complicated model was created around models and views

## What is Redux?

> An open-source JS library, and a predictable state container for JS applications used to manage application state

- Applications developed with Redux are easy to test and can run in different environments showing consistent behaviour

## What are the 3 principles that Redux follows?

- Single source of truth(store): The state of the entire application is stored in an object/state tree within  a single store, making it easier to keep track of changes over time and debug/inspect the application.
    > It is the minimal representation of data

- State is read-only: The only way to change the state is to emit an action, a JS object describing the change
    > It is the minimal representation of change to the data

- Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers
    > It is the minimal representation of how the data changes

## What are the components of Redux?

> Store: A JS object holding application state and providing a few helper methods to access the state(`getState`), dispatch actions(`dispatch`) and register listeners(`subscribe`)
> Actions: objects that describe state change, and what needs to change in the application
> Reducers: pure functions specifying how application's state changes in response to actions sent to the store
> View: displays the data provided by the store

## What do you understand by **Single Source of truth**?

> The state of the entire application is stored in an object/state tree within a single store, making it easier to keep track of changes over time and debug/inspect the application

## Show how data flows through Redux?

![Show how data flows through Redux](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/09/flowda.png)

## How are actions defined in Redux?

> As an object with type property defined as a string constant, created using action creators

## What are the advantages of Redux?

- Predictability of outcome: since there is always one source of truth
- Easier Maintainability: since it has a predictable outcome and strict structure
- Server-side rendering: pass the store created on the server to the client side. This is useful for initial render and provides better UX as it optimizes the application performance
- Developer tools: allow real-time tracking of every state and changes to the state
- Community and ecosystem: large community of developers and a large number of libraries and tools
- Ease of testing: : since Redux code is composed of mostly functions that are small, pure and isolated
- Organization: making code more consistent and easier to work on as a team

## What is the flux?

> Application architecture, enforcing uni-directional data flow, used by Facebook to handle complex data inside a client-side application and manage how data flows in the application

- There is a single source of data (the store) and triggering certain actions is the only way way to update them.The actions call the dispatcher, and then the store is triggered and updated with their own data accordingly.
- When a dispatch has been triggered, and the store updates, it will emit a change event that the views can rerender accordingly.
- Provides stability and reduces runtime errors

## How is Redux different from Flux?

| S/N | Redux | Flux |
|-----|-------|------|
| 1 | A library for state management | An architecture for state management |
| 2 | A single store | Multiple stores |
| 3 | Store's state is immutable | Store's state is mutable |
| 4 | Uses reducers | Uses dispatcher |
| 5 | Store and change logic are separate | Store contains state and change logic |
| 6 | Single store with hierarchical reducers | Multiple disconnected stores that are flat |
| 7 | Container component utilize connect | React component subscribe to store |

## React Router

> A routing library built on top of React to create routes in React applications.

## Why is switch keyword used in React Router v4?

> To display only a single route to be rendered amongst the several defined routes.
> It matches the typed URL with the defined routes in sequential order and renders the first route that matches the URL

## Why do we need React Router?

> Enables multiple views by defining multiple routes while maintaining consistent structure and behaviour in an SPA

## Advantages of React Router?

- It is component-based
- No need to manually set History value
- Split packages for web, native and core making it easier to switch Over based ona  similar coding style

## How is React Routing different from traditional routing?

| S/N | React Routing | Traditional Routing |
|-----|---------------|--------------------|
| 1 | All views exist on a single HTML file | Each view has its own HTML file |
| 2 | User navigates multiple views in the same file | User navigates multiple files for each view |
| 3 | Page does not refresh | Page refreshes on each navigation |
| 4 | Improved performance | Slower performance |
| 5 | Only the history attribute is changed | A HTTP request is sent to a sever and corresponding HTML file is returned |

## How do you style React components?

> Inline styles, CSS stylesheets, CSS-in-JS

## Explain the use of CSS modules in React

> The style is available only for the component that imported it, so there are no naming conflicts while styling the components.

## Differentiate b/w Real DOM and Virtual DOM?

| Real DOM | Virtual DOM |
|----------|-------------|
| Updates are slow | Updates are faster |
| Can directly update HTML | Cannot directly update HTML |
| Creates a new DOM if element updates | Updates the DOM if element updates |
| DOM manipulation is very expensive | DOM manipulation is very easy |
| Too much memory wastage | No memory wastage |

## What do you understand by `refs` in React?

> An attribute that helps to store a reference to a particular React element or component, returned by the component's render configuration function.

```jsx

const MyComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};
```

## List some use cases for refs

> For DOM measurements
> To add methods to a component
> To manage focus, select text or media playback
> To trigger imperative animations
> To integrate with third-party DOM libraries

## How do you modularize React code?

> By using `export` and `import` statements

## Controlled and Uncontrolled Components

| Controlled Components | Uncontrolled Components |
|-----------------------|-------------------------|
| Don't maintain their own state | Maintain their own state |
| Receive current values through props and notify changes via callbacks | Can use ref to get their current values |
| Data is controlled by parent component | Data is controlled by the DOM |

## What is Immutability in React?

## TODO

- [ ] [React Interview Questions – Interview Prep with Answers and Examples](https://www.freecodecamp.org/news/react-interview-questions-and-answers/)

- [ ] [React Interview Questions](https://www.interviewbit.com/react-interview-questions/#react-mcq-questions)
