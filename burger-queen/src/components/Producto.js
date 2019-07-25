import React from "react";
import Contador from "./Contador";

const Producto = ({ producto, eliminarProducto }) => (
  <tr>
    <td>
      <Contador price={producto.price} />
    </td>
    <td>{producto.name}</td>
    <td>${producto.price}</td>
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
