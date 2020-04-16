# `Higher-Order Components`

### A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

HOCs are common in third-party React libraries, such as Redux’s **[connect](https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md#connect)** and Relay’s **[createFragmentContainer](https://relay.dev/docs/en/fragment-container.html)**.

# `Hooks`

### Hooks are a new addition in React 16.8. They let us use state and other React features without writing a class.

## State Hook
```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, **useState** is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders. **useState** returns a pair: the current state value and a function that lets us update it. We can call this function from an event handler or somewhere else. It’s similar to **this.setState** in a class, except it doesn’t merge the old and new state together.

## Effect Hook
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
The Effect Hook, **useEffect**, adds the ability to perform side effects from a function component. It serves the same purpose as **componentDidMount**, **componentDidUpdate**, and **componentWillUnmount** in React classes, but unified into a single API. 

## Custom Hooks
Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: **higher-order components** and **render props**. Custom Hooks let us do this, but without adding more components to our tree.

Custom Hooks are more of a convention than a feature. If a function’s name starts with **use** and it calls other Hooks, we say it is a custom Hook. The **useSomething** naming convention is how linter plugin is able to find bugs in the code using Hooks.

We can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more that haven’t considered yet.

# `Context`

### Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
