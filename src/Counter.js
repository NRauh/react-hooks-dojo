import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>{count}</h2>

      <div className="counter-buttons">
        <button
          className="counter-button"
          data-test="subtract-button"
          onClick={() => setCount(count - 1)}
        >
          Sub
          </button>

        <button
          className="counter-button"
          data-test="add-button"
          onClick={() => setCount(count + 1)}
        >
          Add
          </button>
      </div>
    </div>
  );
};

export default Counter;
