import React from "react";

import PedidoDeUnCliente from "./PedidoDeUnCliente";
import {calculandoLaDuracion,agregarHoraDeTerminoAFirebase, agregarDuracionAFirebase } from '../controller/pedidos'

const ListaDePedidos = ({
  allPedidosFromFirebase,
  documentId,
  horas,
  minutes,
  segundos,
  actualizarEstadoEnFirebase,
  estado,
}) => {
  return (
    <div>
      {allPedidosFromFirebase && (
        <div>
          {allPedidosFromFirebase.docs.map((p) => (
            <div className="card text-black" style={{ maxWidth: "100%" }}>
            {p.data().status === estado &&(
              <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <div className="card-header">
                      Tiempo:{p.data().horaInicio}
                      <div>Fecha: {p.data().date}</div>
                      <div></div>
                      <div>Cliente: {p.data().client} Mesa: 5</div>
                      <div>Estado: {p.data().status}</div>
                      
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <PedidoDeUnCliente pedido={p} />
                </tbody>
                {p.data().status === 'pendiente' &&(<button
                  onClick={() => {
                    const today = new Date();
                    const hours2 = today.getHours();
                    const minutes2 = today.getMinutes();
                    const seconds2 = today.getSeconds();
                    const timeFin = hours2 + ":" + minutes2 + ":" + seconds2;

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
                    actualizarEstadoEnFirebase('entregado',documentId);
                  }}
                >
                  Listo para servirse
                </button> )}
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
