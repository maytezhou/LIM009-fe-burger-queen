import React from "react";

import PedidoDeUnCliente from "./PedidoDeUnCliente";
import {
  calculandoLaDuracion,
  agregarHoraDeTerminoAFirebase,
  agregarDuracionAFirebase,
  actualizarEstadoEnFirebase
} from "../controller/pedidos";

const ListaDeOrdenes = ({
  allPedidosFromFirebase,
  documentId,
  horas,
  minutes,
  segundos,
  estado
}) => {
  return (
    <div className="table">
      {allPedidosFromFirebase && (
        <div className="table-cell">
          {allPedidosFromFirebase.docs.map((p) => (
            <div className="table-cell">
              {p.data().status === estado && (
                <div className="card-body">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <div className="card-header">
                          <div>Cliente: {p.data().client} </div>
                          <div>Mesa: {p.data().mesa}</div>
                          <div>Fecha: {p.data().date}</div>
                          <div>Hora de pedido:{p.data().horaInicio}</div>
                          {p.data().status === 'entregado' ?(<div>Tiempo de Preparacion:{p.data().duracion}</div>) : ''} 
                          <div>Estado: {p.data().status}</div>
                          </div>
                      </tr>
                    </thead>
                    <tbody>
                      <PedidoDeUnCliente pedido={p} />
                    </tbody>
                    {p.data().status === "pendiente" ? (
                      <button
                        onClick={() => {
                          const today = new Date();
                          const hours2 = today.getHours();
                          const minutes2 = today.getMinutes();
                          const seconds2 = today.getSeconds();
                          const timeFin =
                            hours2 + ":" + minutes2 + ":" + seconds2;

                          agregarHoraDeTerminoAFirebase(timeFin, documentId);
                          calculandoLaDuracion(
                            horas,
                            hours2,
                            minutes,
                            minutes2,
                            segundos,
                            seconds2
                          );
                          agregarDuracionAFirebase(
                            calculandoLaDuracion(
                              horas,
                              hours2,
                              minutes,
                              minutes2,
                              segundos,
                              seconds2
                            ),
                            documentId
                          );
                          actualizarEstadoEnFirebase("entregado", documentId);
                        }}
                      >
                        Listo para servirse
                      </button>
                    ) : (
                      ""
                    )}
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListaDeOrdenes;
