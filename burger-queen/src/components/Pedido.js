import React from "react";

import Producto from "./Producto";
import Total from "./Total";

const Pedido = ({
  productos,
  eliminarProducto,
  agregarProducto,
  disminuirCntd,
  clientName,
  agregarNombreDelCliente,
  agregarOrden,
  agregarNumeroDeMesa,
  numeroDeMesa,
  allPedidos,
  gettingProductsOfSameClient,
  gettingTotalCost,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let numberTable = parseInt(numeroDeMesa);
        {
          productos.map((producto) => {
            let productoName = producto.name;
            let price = producto.price;
            let costo = producto.costo;
            let cantidad = producto.cantidad;

            agregarOrden(clientName, numberTable,productoName,price,costo,cantidad);
          });
        }
      }}
    >
      <div className="card text-white bg-info mb-3" style={{ maxWidth: "50%" }}>
        <div className="card-header">
          <Cliente
            clientName={clientName}
            agregarNombreDelCliente={agregarNombreDelCliente}
            agregarOrden={agregarOrden}
            agregarNumeroDeMesa={agregarNumeroDeMesa}
            numeroDeMesa={numeroDeMesa}
          />
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
                    agregarProducto={agregarProducto}
                    disminuirCntd={disminuirCntd}
                  />
                ))}
                {productos.length === 0 ? "" : <Total  allPedidos={allPedidos} gettingProductsOfSameClient={gettingProductsOfSameClient}
        gettingTotalCost={gettingTotalCost} clientName={clientName}/>}
              </tbody>
            </table>
            <button type="submit">Enviar a cocina</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Pedido;
