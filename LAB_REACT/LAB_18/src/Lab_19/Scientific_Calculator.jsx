// Calculator.jsx
import { useState } from "react";
import "./Scientific_Calculator.css";

export default function Scientific_Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="calculator-display" />
      <div className="calculator-buttons">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={handleBackspace} className="backspace">←</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('Math.sqrt(')}>√</button>
        <button onClick={() => handleClick('Math.pow(')}>xʸ</button>
        <button onClick={() => handleClick('Math.sin(')}>sin</button>
        <button onClick={() => handleClick('Math.cos(')}>cos</button>
        <button onClick={() => handleClick('Math.tan(')}>tan</button>
        <button onClick={handleCalculate} className="equal">=</button>
      </div>
    </div>
  );
}
