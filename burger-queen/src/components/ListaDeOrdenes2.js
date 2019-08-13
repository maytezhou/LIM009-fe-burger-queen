import React from "react";

import PedidoDeUnCliente from "./PedidoDeUnCliente";
import {
  calculandoLaDuracion,
  agregarHoraDeTerminoAFirebase,
  agregarDuracionAFirebase,
  actualizarEstadoEnFirebase,
  gettingTotalCost,
} from "../controller/pedidos";
import Total from './Total';

const ListaDeOrdenes2 = ({
  allPedidosFromFirebase,
  documentId,
  horas,
  minutes,
  segundos,
 
}) => {
  return (
    <div className="table">
      {allPedidosFromFirebase && (
        <div className="table-cell">
          {allPedidosFromFirebase.docs.map((p) => (
            <div className="table-cell"> 
           
                <div className="card-body">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <div className="card-header">
                          <div>Cliente: {p.data().client} </div>
                          <div>Mesa:  {p.data().mesa} </div>
                          <div>Fecha: {p.data().date}</div>
                          {p.data().status === "entregado" ? <div>Estado del Pedido: {p.data().status}</div> : ''}
                          <div>Hora del pedido:{p.data().horaInicio}</div>
                          {p.data().status === 'entregado' ?<div>Tiempo de Preparacion:{p.data().duracion}</div> : ''} 
                          <div>Estado: {p.data().status}</div>
                          
                        </div>
                      </tr>
                    </thead>
                    <tbody>
                    <PedidoDeUnCliente pedido={p} />
                    </tbody>
                   </table>
                </div>
          
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListaDeOrdenes2;
