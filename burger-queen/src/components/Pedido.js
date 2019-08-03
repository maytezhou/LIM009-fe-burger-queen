import React from "react";

import Producto from "./Producto";
import Total from "./Total";

const Pedido = ({
  pedidos,
  eliminarProducto,
  agregarPedido,
  disminuirCntd,
  clientName,
  agregarNombreDelCliente,
  agregarOrdenFirebase,
  agregarNumeroDeMesa,
  numeroDeMesa,
  gettingTotalCost
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let numberTable = parseInt(numeroDeMesa);
        console.log('ESTO ES PEDIDOS ANTES DE SUBIRSE',pedidos);
        agregarOrdenFirebase(pedidos, clientName, numberTable);
      }}
    >
      <div className="card text-white bg-info mb-3" style={{ maxWidth: "50%" }}>
        <div className="card-header">
          <Cliente
            clientName={clientName}
            agregarNombreDelCliente={agregarNombreDelCliente}
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
                {pedidos.map((p) => (
                  <Producto
                    key={p.id}
                    producto={p}
                    eliminarProducto={eliminarProducto}
                    agregarPedido={agregarPedido}
                    disminuirCntd={disminuirCntd}
                  />
                ))}
                {pedidos.length === 0 ? (
                  ""
                ) : (
                  <Total
                    pedidos={pedidos}
                    gettingTotalCost={gettingTotalCost}
                    clientName={clientName}
                  />
                )}
              </tbody>
            </table>
            {pedidos.length >= 1 && clientName !== "" && numeroDeMesa !== "" ? (
              <button type="submit">Enviar a cocina</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export default Pedido;
