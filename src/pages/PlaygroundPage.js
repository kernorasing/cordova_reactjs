import React, { useState, useEffect } from 'react';

export default function PlaygroundPage() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`count`, count);
  }, [count]);

  useEffect(() => {
    console.log(`count 2`, count2);
  }, [count2]);

  return (
    <div className="page-container">
      <h3>PLAYGROUND PAGE</h3>
      <div className="text-center">
        <p>{count}</p>
        <button className="btn btn-light m-1" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="btn btn-light m-1" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </div>
      <div className="text-center">
        <p>{count2}</p>
        <button className="btn btn-light m-1" onClick={() => setCount2(count2 + 1)}>
          Increase
        </button>
        <button className="btn btn-light m-1" onClick={() => setCount2(count2 - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
}
