import React from "react";

const Contador = ({
  agregarPedido,
  producto,
  disminuirCntd,
  eliminarProducto,
  pedidos,
  setPedidos,
}) => (
  <>
    <button
      type="button"
      onClick={() => {
        // agregarPedido(producto, pedidos);
         setPedidos(agregarPedido(producto,pedidos));
      // agregarPedido(producto,pedidos,setPedidos);
      }}
    >
      +
    </button>
    <p>{producto.cantidad}</p>

    <button
      type="button"
      onClick={() =>
        producto.cantidad <= 1
          ? setPedidos(eliminarProducto(producto.id, pedidos))
          : setPedidos(disminuirCntd(producto, pedidos))
      }
    >
      -
    </button>
  </>
);
export default Contador;
