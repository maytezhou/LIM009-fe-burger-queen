import React from "react";
import PedidoDeUnCliente from "./PedidoDeUnCliente";

const ListaDePedidos = ({ allPedidosFromFirebase, agregarHoraDeTerminoAFirebase,documentId }) => {
  return (
    <div>
      {allPedidosFromFirebase && (
        <div>
          {allPedidosFromFirebase.docs.map((p) => (
            <div className="card text-black" style={{ maxWidth: "100%" }}>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <div className="card-header">
                        Tiempo:{p.data().horaInicio}
                        <div>Fecha: {p.data().date}</div>
                        <div></div>
                        <div>Cliente: {p.data().client} Mesa: 5</div>
                      </div>
                    </tr>
                  </thead>
                  <tbody>
                    <PedidoDeUnCliente pedido={p} />
                  </tbody>
                  <button
                    onClick={() => {
                      const today = new Date();
                      const timeFin =
                        today.getHours() +
                        ":" +
                        today.getMinutes() +
                        ":" +
                        today.getSeconds();
                        agregarHoraDeTerminoAFirebase(timeFin,documentId);
                    }}
                  >
                    Listo para servirse
                  </button>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListaDePedidos;
