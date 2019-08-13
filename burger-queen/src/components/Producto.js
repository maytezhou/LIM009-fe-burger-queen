import React from "react";
import Contador from "./Contador";

const Producto = ({
  producto,
  eliminarProducto,
  agregarPedido,
  disminuirCntd,
  pedidos,
  setPedidos,
}) => (
  <tr>
    <td>
      <Contador
        producto={producto}
        agregarPedido={agregarPedido}
        disminuirCntd={disminuirCntd}
        eliminarProducto={eliminarProducto}
        pedidos={pedidos}
        setPedidos={setPedidos}
      />
    </td>
    <td>{producto.name}</td>
    <td>${producto.costo}</td>
    <td>
      <button
      className="btn-none"
        onClick={() => {
          setPedidos(eliminarProducto(producto.id, pedidos));
        }}
      >
        <img src="https://i.postimg.cc/pdd1tZXB/delete.png" className="btn-img-delete"/>
      </button>
    </td>
  </tr>
);
export default Producto;
