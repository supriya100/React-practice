// Import React and useState
import React, { useState } from 'react';

// Counter Component
function CounterApp() {
  // Declare state variable 'count' and a function to update it
  const [count, setCount] = useState(0);

  // Increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset count
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={buttonStyle}>
        Increment
      </button>
      <button onClick={decrement} style={buttonStyle}>
        Decrement
      </button>
      <button onClick={reset} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
}

// Button styles
const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

// Export the component
export default CounterApp;
