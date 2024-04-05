import { useState } from 'react';
import './App.css';

function App() {
  const [Count, setCount] = useState(0);
  const Add = () => {
      setCount( Count + 1);
  }

  const Sub = () => {
    setCount( Count - 1);
}

  return(
    <div className='counter'>
      <button className='counter--minus' onClick={Sub}>-</button>
      <div>
        <h1>{Count}</h1>
      <button className='counter--plus' onClick={Add}>+</button>
      </div>
    </div>
  );
}

export default App;
