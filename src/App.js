import React from 'react';
import './App.css';
import Counter from './Counter';
import { useIntersect } from './custom-hooks';

const App = () => {
  const [ref, entry] = useIntersect({});

  return (
    <div>
      <div className={`counter-container ${entry.isIntersecting ? 'dim' : ''}`}>
        <h1>React Hook Dojo</h1>

        <Counter />
      </div>

      <div className="out-of-view" ref={ref}>
        <h2>Hello World</h2>
      </div>
    </div>
  );
};

export default App;
