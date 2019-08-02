import React  from "react";

const precioPorCantidad = (precio, cantidad) => {
  return precio * cantidad;
};
const Contador = ({ agregarProducto, producto, disminuirCntd ,eliminarProducto}) => {
  return (
    <>
      <button onClick={() => agregarProducto(producto)}>+</button>
      <p>{producto.cantidad}</p>

      <button onClick={ ()=>producto.cantidad <=1 ?eliminarProducto(producto.id) : disminuirCntd(producto)}>-</button>
    </>
  );
};
export default Contador;
