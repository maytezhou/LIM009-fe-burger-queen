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
    <div>
      <button  onClick={() => {
          setEstado("pendiente");
        }}
        type="button"
        className="btn btn-info">Pendientes</button>
      <button  onClick={() => {
          setEstado("entregado");
        }}
        type="button"
        className="btn btn-info">Entregados</button>
     
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
