import React from "react";
import { useState } from "react";
import "./App.css";
function Counter() {
  const [count, setCount] = useState(0);

  // decrement

  function decrement() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div>
      {/* COUNTER */}
      <div className="display">{count}</div>
      <div>
        {/* INCREMENT */}

        <button
          onClick={() => {
            setCount(count+1);
          }}
        >
          INCREMENT
        </button>

        {/* DECREMENT */}

        <button onClick={decrement}>DECREMENT</button>
      </div>
    </div>
  );
}

export default Counter;
