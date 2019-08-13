import React, { useState } from "react";
import { Link } from "react-router-dom";

import ListaDeOrdenes from "./ListaDeOrdenes";

const Orden = ({
  setPedidos,
  setClientName,
  setTableNumber,
  allPedidosFromFirebase,
  documentId,
  horas,
  minutes,
  segundos
}) => {
  const [estado, setEstado] = useState("pendiente");
  return (
    <div className="trans text-center">
      <button
        data-testid="new-order-btn"
        type="button"
        className="btn btn-primary mx-2 px-5 mb-3 mt-3 aos-init aos-animate"
        onClick={() => {
          setPedidos([]);
          setClientName("");
          setTableNumber("");
        }}
      >
        Nueva Orden
      </button>
      <Link
        data-testid="order-list-btn"
        type="button"
        className="btn btn-primary mx-2 px-5 mb-3 mt-3 aos-init aos-animate"
        onClick={() => {
          setEstado("entregado");
        }}
      >
        Lista de ordenes
      </Link>
      {estado === "entregado" && (
        <div>
          <ListaDeOrdenes
            allPedidosFromFirebase={allPedidosFromFirebase}
            documentId={documentId}
            horas={horas}
            minutes={minutes}
            segundos={segundos}
            estado={estado}
          />
        </div>
      )}
    </div>
  );
};
export default Orden;
{/* <ListaDeOrdenes
allPedidosFromFirebase={allPedidosFromFirebase}
documentId={documentId}
horas={horas}
minutes={minutes}
segundos={segundos}
estado={estado}
/> */}