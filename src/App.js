import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function myCounter(type, multiple) {
    if (count >= 10 || count <= -10) {
      setCount((count = 0));
    }
    if (type === "add") {
      setCount(count + multiple);
    } else if (type === "subtract") {
      setCount(count - multiple);
    }
  }

  return (
    <div className="App">
      <div className="counterContainer">
        <div className="counter">
          Counter: {count} and increment is: {incrementBy}
        </div>
        <div className="buttonGroup">
          {/* <button onClick={() => setCount(count + 1)}>+</button> */}
          <button onClick={() => myCounter("add", incrementBy)}>+</button>
          <button onClick={() => myCounter("subtract", incrementBy)}>-</button>
          <button
            onClick={() => {
              incrementBy === 1 ? setIncrementBy(2) : setIncrementBy(1);
            }}
          >
            {" "}
            x2{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
