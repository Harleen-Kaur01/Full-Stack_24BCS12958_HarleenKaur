import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  if (action === 'INCREMENT') return state + 1;
  if (action === 'DECREMENT') return state - 1;
  if (action === 'RESET') return 0;
  return state;
};

function App() {
  const [count, setCount] = useState(0);
  const [reducerCount, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter App</h1>

      <div>
        <h2>Using useState</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <hr />

      <div>
        <h2>Using useReducer</h2>
        <p>Count: {reducerCount}</p>
        <button onClick={() => dispatch('INCREMENT')}>Increment</button>
        <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
        <button onClick={() => dispatch('RESET')}>Reset</button>
      </div>
    </div>
  );
}

export default App;
