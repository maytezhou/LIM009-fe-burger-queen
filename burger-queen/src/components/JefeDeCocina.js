import React, { useState } from "react";
import ListaDePedidos from "./ListaDePedidos";

const JefeDeCocina = ({
  allPedidosFromFirebase,
  agregarHoraDeTerminoAFirebase,
  horas,
  minutes,
  segundos,
  calculandoLaDuracion,
  agregarDuracionAFirebase,
  documentId,
  actualizarEstadoEnFirebase,
}) => {
  const [estado, setEstado] = useState('pendiente');
  return (
    <div >
      <div className="trans text-center">
      <button  onClick={() => {
          setEstado("pendiente");
        }}
        type="button"
        className="btn btn-lila m-3">Pendientes</button>
      <button  onClick={() => {
          setEstado("entregado");
        }}
        type="button"
        className="btn btn-lila m-3 ">Entregados</button>
     </div>
        <div>
         <ListaDePedidos
        allPedidosFromFirebase={allPedidosFromFirebase}
        agregarHoraDeTerminoAFirebase={agregarHoraDeTerminoAFirebase}
        documentId={documentId}
        horas={horas}
        minutes={minutes}
        segundos={segundos}
        calculandoLaDuracion={calculandoLaDuracion}
        agregarDuracionAFirebase={agregarDuracionAFirebase}
        actualizarEstadoEnFirebase={actualizarEstadoEnFirebase}
        estado={estado}
      />
        </div>
    
  
    </div>
  );
};
export default JefeDeCocina;
