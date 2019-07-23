import React, { useState }from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
        +
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(prevCount => prevCount - 1 < 0? 0:prevCount -1)}>
        -
        </button>
      </>
    );
  }
  export default Contador;