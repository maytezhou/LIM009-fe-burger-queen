import React  from "react";

const Contador = ({ agregarPedido, producto, disminuirCntd ,eliminarProducto}) => (
    <>
      <button onClick={() => agregarPedido(producto)}>+</button>
      <p>{producto.cantidad}</p>

      <button onClick={ ()=>producto.cantidad <=1 ?eliminarProducto(producto.id) : disminuirCntd(producto)}>-</button>
    </>
);
export default Contador;
