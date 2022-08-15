# React Basics

## NPM v. Yarn

## NPM v. NPX

- NPX: downloads packages, uses it and then deletes it from the disk

- NPM: downloads packages wither to global or project first before it can be used

## Babel v. Webpack

- Babel: takes our code and makes it into a version of JS that most browsers can understand/use

- Webpack: modularizing/chunking our code such that the JS for a page is particularly used at one time

- Eject: ejecting webpack and babel to customize them

## JSX

- Syntax extension of JS, making it more efficient to tell our component what to render

## SetState: Shallow Merge

- Shallow merges(only updates the keys provided and leaves the previous keys same) previous state with new state to get a new object

- For state update, always use the same data type in the old state and new state

## Key value

- Needed for React to identify which component to update

## Lifecycle Methods

Lifecycle methods are called in this order:

- Constructor
- Render: and on every state update
- ComponentDidMount

## Rendering & Re-rendering

- Renders when component is first mounted
- Re-renders when state changes or props change

## Universal Styling with CSS

- Importing CSS files in a component will still apply the CSS in the global scope of the app. Therefore, it is important to use either styled components , CSS modules, CSS in JSX, or CSS targeted at a specific component.

## Pure & Impure Functions

- Pure functions: returns the same output every time with the same input. As such, they don't depend on any external state or props.

- Side effects: functions that change the state or the props of another function outside its scope.

## Real DOM v. Virtual DOM

- Virtual DOM is JS copy of the real DOM that makes it easier to update the real DOM. How?
  - It creates a copy of the VDOPM current snapshot.
  - When changes are made, depending on how fast/slow, it uses _batching_ to record this changes and then update the VDOM copy.
  - Next the VDOM copy is compared with the VDOM current snapshot and only the nodes changed in the copy gets updated in the snapshot.
  - Once this is complete, the VDOM copy is discarded and the DOM is then updated using the VDOM, upating only the parts that were chnaged.

## React v. ReactDOM

- React is the engine determining what to render and how
- React DOM says where to render to: the web

## DOM Paint Flashing

- Reflow is what happens when React adjusts the contents on the current view to accomodate the _mounting_ and _unmounting_ of another component.

- When the component is _mounted_ or _unmounted_, the whole document flashes. After that though, every other change to that component only results to flashing in that component

## Resources

- [ ] [Component Lifecycle Methods](https://reactjs.org/docs/react-component.html)
