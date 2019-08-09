import React from "react";
import PedidoDeUnCliente from "./PedidoDeUnCliente";

const ListaDePedidos = ({ allPedidosFromFirebase, agregarHoraDeTerminoAFirebase,documentId,horas,minutes,segundos,calculandoLaDuracion,agregarDuracionAFirebase }) => {
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
                      const hours2= today.getHours();
                      const minutes2= today.getMinutes();
                      const seconds2 = today.getSeconds();
                      const timeFin =
                       hours2 +
                        ":" +
                        minutes2 +
                        ":" +
                       seconds2;
                        
                      
                        agregarHoraDeTerminoAFirebase(timeFin,documentId);
                        calculandoLaDuracion(horas,hours2,minutes,minutes2,segundos,seconds2);
                        agregarDuracionAFirebase(calculandoLaDuracion(horas,hours2,minutes,minutes2,segundos,seconds2),documentId);
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
