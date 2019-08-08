import React from "react";
import PedidoDeUnCliente from "./PedidoDeUnCliente";

const ListaDePedidos = ({ allPedidosFromFirebase }) => {
  return (
    <div>
        {allPedidosFromFirebase && (
            <div>
      {allPedidosFromFirebase.docs.map((p)=>
      (
        <div className="card text-black" style={{ maxWidth: "100%" }}>
          <div className="card-header">
            <div>
              Tiempo:{p.data().hour}
              <div>Fecha: {p.data().date}</div>
            </div>
            <div>Cliente:{p.data().client}Mesa: 5</div>
          </div>
          <div className="card-body">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <PedidoDeUnCliente pedido={p}/>
                  {/* {pedidos.map((p) => (
                        <PedidoDeUnCliente
                          
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
                      )} */}
                </tbody>
                <button onClick={() => {}}>Listo para servirse</button>
              </table>
            </div>
          </div>
        </div>
      )
      )}
      </div>
      )}
    </div>
  );
};
export default ListaDePedidos;
