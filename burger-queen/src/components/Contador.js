import React  from "react";

const Contador = ({ agregarPedido, producto, disminuirCntd ,eliminarProducto}) => (
    <>
      <button type="button" onClick={() => agregarPedido(producto)}>+</button>
      <p>{producto.cantidad}</p>

      <button type="button" onClick={ ()=>producto.cantidad <=1 ?eliminarProducto(producto.id) : disminuirCntd(producto)}>-</button>
    </>
);
export default Contador;
