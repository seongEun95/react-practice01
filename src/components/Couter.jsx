import { useState } from 'react';
import './Counter.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClickButton = e => {
    const isPlus = e.target.id === 'plus';

    setCount(isPlus ? count + 1 : count - 1);

    // setCount(id === 'plus' ? count + 1 : count - 1);

    // if (id === 'plus') setCount(count + 1);
    // else setCount(count - 1);
  };

  return (
    <div className="Counter">
      <button id="minus" className="button" onClick={handleClickButton}>
        -
      </button>
      <div className="count">{count}</div>
      <button id="plus" className="button plus" onClick={handleClickButton}>
        +
      </button>
    </div>
  );
}
