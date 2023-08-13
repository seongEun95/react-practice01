import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [num, setNum] = useState(0);

  return (
    <div className="App">
      <div className="count">
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          -
        </button>
        <div className="count-num">{num}</div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
