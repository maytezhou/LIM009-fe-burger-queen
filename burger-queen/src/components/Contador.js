import React, { useState } from "react";

const precioPorCantidad = (precio, cantidad) => {
  return precio * cantidad;
};
const Contador = ({precio}) => {
  const [count, setCount] = useState(1);
  
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <p>{count}</p>
      
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount - 1 < 1 ? 1 : prevCount - 1))
        }
      >
        -
      </button>
    </>
  );
};
export default Contador;
