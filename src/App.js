import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  // a function that takes the type add or subtract and the mulitple 1 or 2
  function myCounter(type, multiple) {
    if (type === "add") {
      if (count + multiple >= 11) {
        setCount((count = 0));
      } else {
        setCount(count + multiple);
      }
    } else if (type === "subtract") {
      if (count - multiple <= -11) {
        setCount((count = 0));
      } else {
        setCount(count - multiple);
      }
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
            className={incrementBy === 2 ? "btn-active" : ""}
            onClick={() => {
              incrementBy === 1 ? setIncrementBy(2) : setIncrementBy(1);
            }}
          >
            {" "}
            +{incrementBy}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
