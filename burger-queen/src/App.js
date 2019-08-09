import React, { useState } from "react";
import * as firebase from "firebase";
import Nav from "./components/Nav";
import Orden from "./components/Orden";
import "./App.css";
import Menu from "./components/Menu";
import Pedido from "./components/Pedido";
import ListaDePedidos from "./components/ListaDePedidos";
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
  
  
  const [minutes, setMinutes] = useState(null);
  const [horas, setHoras] = useState(null);
  const [segundos, setSegundos] = useState(null);

  const [pedidosId, setPedidosId] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [clientName, setClientName] = useState("");
  const [numeroDeMesa, setTableNumber] = useState("");

  //llamanndo colleccion prodeuctos
  const [allProducts] = useCollection(app.firestore().collection("producto3"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  //llamando colleccion clientes
  const [allPedidosFromFirebase] = useCollection(
    app.firestore().collection("clients"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );
  const agregarNombreDelCliente = (e) => setClientName(e.target.value);
  const agregarNumeroDeMesa = (e) => setTableNumber(e.target.value);

  // const firebase.firestore().collection(nameCollection).doc(docId).get();
  const agregarDuracionAFirebase = (duracion,documentId) => {
    console.log("SE SUBIO LA DURACION A  FIREBASE");
    const db = firebase.firestore();
    db.collection("clients")
      .doc(documentId)
      .update({
       duracion,
      });
  };
  const agregarHoraDeTerminoAFirebase = (horaDeFin, documentId) => {
    console.log("SE SUBIO LA HORA DE FIN  FIREBASE");
    const db = firebase.firestore();
    db.collection("clients")
      .doc(documentId)
      .update({
        horaDeFin
      });
  };
  const calculandoLaDuracion = (horaDeInicio,horaDeFin,minutosDeInicio,minutoDeFin,segundosInicio,segundosFin) => {
    const hora=horaDeFin - horaDeInicio;
   const minutos=  minutoDeFin - minutosDeInicio;
   const segundos =  segundosFin - segundosInicio;
return `${hora} : ${minutos} : ${segundos}`;
  };

  const agregarOrdenFirebase = (arrPedidos, nameClient, numeroDeMesa) => {
    console.log("SE SUBIO A FIREBASE");
    const db = firebase.firestore();
    const today = new Date();
    // const now= Date.now();
    // console.log('horaaaaa',now/1000);
    // console.log('segundoss',now%60);
    // console.log('minuto',now/60);
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const hours=today.getHours();
      const minutes=today.getMinutes();
       const seconds = today.getSeconds();
     setHoras(hours);
     setMinutes(minutes);
     setSegundos(seconds);

     db.collection("clients")
      .add({
        date,
        horaInicio: time,
        status: "pendiente",
        client: nameClient,
        order: arrPedidos,
        mesa: numeroDeMesa
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      setPedidosId(docRef.id);
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
          agregarHoraDeTerminoAFirebase={agregarHoraDeTerminoAFirebase}
          documentId={pedidosId}
          horas={horas}
          minutes={minutes}
          segundos={segundos}
         calculandoLaDuracion={calculandoLaDuracion}
         agregarDuracionAFirebase={agregarDuracionAFirebase}
        />
      </div>
    </div>
  );
}
export default App;
