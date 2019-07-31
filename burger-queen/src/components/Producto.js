import React from "react";
import Contador from "./Contador";

const Producto = ({
  producto,
  eliminarProducto,
  agregarProducto,
  disminuirCntd
}) => (
  <tr>
    <td>
      <Contador
        producto={producto}
        agregarProducto={agregarProducto}
        disminuirCntd={disminuirCntd}
        eliminarProducto={eliminarProducto}
      />
    </td>
    <td>{producto.name}</td>
    <td>${producto.costo}</td>
    <td>
      <button
        onClick={() => {
          eliminarProducto(producto.id);
        }}
      >
        x
      </button>
    </td>
  </tr>
);
export default Producto;
