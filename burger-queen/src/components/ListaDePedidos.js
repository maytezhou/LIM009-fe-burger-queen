import React from "react";

import PedidoDeUnCliente from "./PedidoDeUnCliente";
import {
  calculandoLaDuracion,
  agregarHoraDeTerminoAFirebase,
  agregarDuracionAFirebase,
  gettingTotalCost,
} from "../controller/pedidos";
import Total from './Total';

const ListaDePedidos = ({
  allPedidosFromFirebase,
  documentId,
  horas,
  minutes,
  segundos,
  actualizarEstadoEnFirebase,
  estado
}) => {
  return (
    <div className="table">
      {allPedidosFromFirebase && (
        <div className="table-cell">
          {allPedidosFromFirebase.docs.map((p) => (
            <div className="table-cell" style={{ maxWidth: "100%" }}>
              {p.data().status === estado && (
                <div className="card-body">
                  <table className="table">
                    <thead className="table-sm">
                      <tr>
                        <div className="card-header">
                          <div>Fecha: {p.data().date}</div>
                          <div>Cliente: {p.data().client} </div>
                          <div>Mesa: {p.data().mesa}</div>
                          <div>Hora: {p.data().horaInicio}</div>
                          {p.data().status === 'entregado' ?<div>Tiempo de Preparacion:{p.data().duracion}</div> : ''} 
                          <div>Estado del Pedido: {p.data().status}</div>
                          </div>
                      </tr>
                    </thead>
                    <tbody>
                   <PedidoDeUnCliente pedido={p} />
                   <Total pedidos={p.data().order} gettingTotalCost={gettingTotalCost} />
                    </tbody>
                    {p.data().status === "pendiente" && (
                      <button
                        className="btn btn-success center"
                        onClick={() => {
                          console.log(p.data().status)
                          console.log('hice clickkkk',p);
                           const today = new Date();
                          const hours2 = today.getHours();
                          const minutes2 = today.getMinutes();
                          const seconds2 = today.getSeconds();
                          const timeFin =
                            hours2 + ":" + minutes2 + ":" + seconds2;

                          agregarHoraDeTerminoAFirebase(timeFin, p.id);
                         
                          agregarDuracionAFirebase(
                            calculandoLaDuracion(
                              horas,
                              hours2,
                              minutes,
                              minutes2,
                              segundos,
                              seconds2
                            ),
                            p.id
                          );
                          actualizarEstadoEnFirebase("entregado", p.id); 
                        }}
                      >
                        Listo para servirse
                      </button>
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
export default ListaDePedidos;
