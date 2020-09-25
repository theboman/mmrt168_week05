import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="counterContainer">
        <div>Counter:</div>
        <div>1</div>
      </div>
      <button>+</button>
      <button>-</button>
    </div>
  );
}
