import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Orden from "./Orden";
import Menu from "./Menu";
import Pedido from "./Pedido";
import {
  disminuirCntd,
  eliminarProducto,
  agregarPedido,
  gettingTotalCost,
  agregarOrdenFirebase
} from "../controller/pedidos";

const Mesero = ({
  setPedidos,
  setClientName,
  setTableNumber,
  allProducts,
  pedidos,
  setHoras,
  setMinutes,
  setSegundos,
  setPedidosId,
  clientName,
  agregarNombreDelCliente,
  agregarNumeroDeMesa,
  numeroDeMesa,
  segundos,
  minutes,
  horas,
  documentId,
  allPedidosFromFirebase
}) => {
  return (
    <>
      <Orden
        setPedidos={setPedidos}
        setClientName={setClientName}
        setTableNumber={setTableNumber}
        allPedidosFromFirebase={allPedidosFromFirebase}
        documentId={documentId}
        horas={horas}
        minutes={minutes}
        segundos={segundos}
      />
      <div className="row">
        <div className="col-6">
          <Menu
            agregarPedido={agregarPedido}
            allProducts={allProducts}
            pedidos={pedidos}
            setPedidos={setPedidos}
          />
        </div>
        <div className="col-6">
          <Pedido
            setHoras={setHoras}
            setMinutes={setMinutes}
            setSegundos={setSegundos}
            setClientName={setClientName}
            setTableNumber={setTableNumber}
            setPedidosId={setPedidosId}
            pedidos={pedidos}
            eliminarProducto={eliminarProducto}
            agregarPedido={agregarPedido}
            disminuirCntd={disminuirCntd}
            clientName={clientName}
            agregarNombreDelCliente={agregarNombreDelCliente}
            agregarOrdenFirebase={agregarOrdenFirebase}
            agregarNumeroDeMesa={agregarNumeroDeMesa}
            numeroDeMesa={numeroDeMesa}
            gettingTotalCost={gettingTotalCost}
            setPedidos={setPedidos}
          />
        </div>
      </div>
    </>
  );
};
export default Mesero;
