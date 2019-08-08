import React, { useState } from "react";
import * as firebase from "firebase";
import Nav from "./components/Nav";
import Orden from "./components/Orden";
import "./App.css";
import Menu from "./components/Menu";
import Pedido from "./components/Pedido";
import ListaDePedidos from './components/ListaDePedidos'
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
  const [allPedidosFromFirebase] = useCollection(app.firestore().collection("clients"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const agregarNombreDelCliente = (e) => setClientName(e.target.value);
  const agregarNumeroDeMesa = (e) => setTableNumber(e.target.value);

  
  // const firebase.firestore().collection(nameCollection).doc(docId).get();

  const agregarOrdenFirebase = (arrPedidos, nameClient, numeroDeMesa) => {
    console.log("SE SUBIO A FIREBASE");
    const db = firebase.firestore();
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    db.collection("clients").add({
      date,
      hour: time,
      duration: '00:00:00',
      status:'pendiente',
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
      <Orden
        setPedidos={setPedidos}
        setClientName={setClientName}
        setTableNumber={setTableNumber}
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
      <div>
        <ListaDePedidos
        allPedidosFromFirebase={allPedidosFromFirebase}
        />
      </div>
    </div>
  );
}
export default App;
