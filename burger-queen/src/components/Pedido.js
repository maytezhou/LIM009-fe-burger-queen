import React, { useState } from "react";
import Cliente from "./Cliente";
import Contador from "./Contador";
import Producto from "./Producto";

const Pedido = ({ productos, eliminarProducto }) => {
  return (
    <div className="card text-white bg-info mb-3" style={{ maxWidth: "50%" }}>
      <div className="card-header">
        <Cliente />
      </div>
      <div className="card-body">
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <Producto
                  key={p.id}
                  producto={p}
                  eliminarProducto={eliminarProducto}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Pedido;
