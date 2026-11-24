import { useState } from 'react';
import './App.css';

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Calculator states
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  // Calculator functions
  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));

  const divide = () => {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="container">
      <h1>Counter and Calculator</h1>

      {/* Counter */}
      <div className="box">
        <h2>Counter</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      {/* Calculator */}
      <div className="box">
        <h2>Calculator</h2>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <br />

        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>

        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default App;