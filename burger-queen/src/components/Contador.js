import React from "react";

const Contador = ({
  agregarPedido,
  producto,
  disminuirCntd,
  eliminarProducto,
  pedidos,
  setPedidos
}) => (
  <div className="col-6 table">
    <button
      className="table-cell btn-img-plus btn-none"
      type="button"
      onClick={() => {
        // agregarPedido(producto, pedidos);
        setPedidos(agregarPedido(producto, pedidos));
        // agregarPedido(producto,pedidos,setPedidos);
      }}
    >
      <img src="https://i.postimg.cc/t4NLbJd9/mas.png"  />
    </button>
    <p className="table-cell">{producto.cantidad}</p>
    <button
      className="table-cell btn-img-plus btn-none"
      type="button"
      onClick={() =>
        producto.cantidad <= 1
          ? setPedidos(eliminarProducto(producto.id, pedidos))
          : setPedidos(disminuirCntd(producto, pedidos))
      }
    >
      <img src="https://i.postimg.cc/XvNtYWxd/menos.png"  />
    </button>
    </div>
);
export default Contador;
