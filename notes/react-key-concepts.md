# React Key Concepts

## Key Concepts

### Imperative vs Declarative: State

- Imperative: change different parts of the app's DOM directly in relation to particular user intercations or events

- Declarative: say what state the app should be in and React will handle DOM changes. Basically, based on what state is required, React reacts to it by updating the DOM

### Component Architecture: Component

- Functions or classes that receive attributes and based on the state display the correct content
- Self contained piece of code that returns a UI

### Unidirectional(One-way) Data Flow: VDOM

- Trickles down state changes to children compoenents to update the VDOM and in turn the DOM. This restriction makes debugging errors easier.

### UI Library: View

- Provides just state and components to render the UI, making it easy to be implemented in different frameworks(cross-platform)

## How To Be A _Great_ React Developer

- Decide on components
- Decide the state and where it lives
- Decide what changes when the state changes

## Resources

- [ ] [Create React App Docs](https://create-react-app.dev/docs/getting-started/)
