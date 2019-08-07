import React, { useState } from "react";
import * as firebase from "firebase";
import Nav from "./components/Nav";
import Orden from "./components/Orden";
import "./App.css";
import Menu from "./components/Menu";
import Pedido from "./components/Pedido";
import Logo from "./img/logoBq.png";
import { useCollection } from "react-firebase-hooks/firestore";
import app from "../src/components/Firebase";
import {
  gettingTotalCost,
  agregarPedido,
  disminuirCntd,
  eliminarProducto
} from "../src/controller/pedidos";

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [clientName, setClientName] = useState("");
  const [numeroDeMesa, setTableNumber] = useState("");

  //llamanndo colleccion prodeuctos
  const [allProducts] = useCollection(app.firestore().collection("producto3"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  //llamando colleccion clientes
  // const [allPedidos] = useCollection(app.firestore().collection("clients"), {
  //   snapshotListenOptions: { includeMetadataChanges: true }
  // });
  const agregarNombreDelCliente = (e) => setClientName(e.target.value);
  const agregarNumeroDeMesa = (e) => setTableNumber(e.target.value);

  console.log(pedidos);

  const agregarOrdenFirebase = (arrPedidos, nameClient, numeroDeMesa) => {
    console.log("SE SUBIO A FIREBASE");
    const db = firebase.firestore();
    db.collection("clients").add({
      client: nameClient,
      order: arrPedidos,
      mesa: numeroDeMesa
    });
    setClientName("");
    setTableNumber("");
    setPedidos([]);
  };

  return (
    <div>
      <Nav logo={Logo} />
      <Orden />
      <Menu
        agregarPedido={agregarPedido}
        allProducts={allProducts}
        pedidos={pedidos}
        setPedidos={setPedidos}
      />
      <Pedido
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
  );
}
export default App;
