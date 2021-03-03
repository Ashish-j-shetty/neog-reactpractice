import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter((counter) => counter - 1);
        }}
      >
        -
      </button>
      <strong>Counter: {counter} </strong>

      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
