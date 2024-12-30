import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <h2>Seconds: {count}</h2>
    </div>
  );
}

export default Timer;
