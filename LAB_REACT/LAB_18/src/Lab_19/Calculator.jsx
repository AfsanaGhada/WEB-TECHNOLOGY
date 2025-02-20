import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  const calculateResult = () => {
    try {
      setResult(Function('"use strict"; return (' + input + ')')());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result !== null ? result : input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
          >
            {char}
          </button>
        ))}
        <button className="clear" onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
