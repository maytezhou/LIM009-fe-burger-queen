
import React, { useState } from "react";
import * as firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import app from "../src/components/Firebase";
import Header from "./components/Header";
import "./App.css";
import ListaDePedidos from "./components/ListaDePedidos";
import Logo from "./img/logo.png";
import Mesero from "./components/Mesero";
import JefeDeCocina from "./components/JefeDeCocina";
import Home from "./components/Home";
import ListaDeOrdenes2 from './components/ListaDeOrdenes2';

import {
  gettingTotalCost,
  agregarPedido,
  disminuirCntd,
  eliminarProducto,
  calculandoLaDuracion,
  agregarDuracionAFirebase,
  agregarHoraDeTerminoAFirebase,
  actualizarEstadoEnFirebase,
  agregarOrdenFirebase
} from "../src/controller/pedidos";

function App() {

  const [minutes, setMinutes] = useState(null);
  const [horas, setHoras] = useState(null);
  const [segundos, setSegundos] = useState(null);
  const [documentId, setPedidosId] = useState("");
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

  return (
    <div>
      {/* <Router> */}
        <Header logo={Logo} />
        
        <Switch>
        <Route exact path="/" component={Home} />
          <Route
            path="/mesero"
            render={(props) => (
              <Mesero
                {...props}
                setPedidos={setPedidos}
                setClientName={setClientName}
                setTableNumber={setTableNumber}
                allProducts={allProducts}
                pedidos={pedidos}
                setHoras={setHoras}
                setMinutes={setMinutes}
                setSegundos={setSegundos}
                setPedidosId={setPedidosId}
                clientName={clientName}
                agregarNombreDelCliente={agregarNombreDelCliente}
                agregarNumeroDeMesa={agregarNumeroDeMesa}
                numeroDeMesa={numeroDeMesa}
                documentId={documentId}
                horas={horas}
                minutes={minutes}
                segundos={segundos}
                allPedidosFromFirebase={allPedidosFromFirebase}
              />
            )}
          />
           <Route
            path="/ordenes"
            render={(props) => (
              <ListaDeOrdenes2
                {...props}
                allPedidosFromFirebase={allPedidosFromFirebase}
                documentId={documentId}
                horas={horas}
                minutes={minutes}
                segundos={segundos}
              
              />
             )}
          />

        <div>
        <Route
            path="/cocinero"
            render={(props) => (
              <JefeDeCocina
                {...props}
                allPedidosFromFirebase={allPedidosFromFirebase}
                agregarHoraDeTerminoAFirebase={agregarHoraDeTerminoAFirebase}
                documentId={documentId}
                horas={horas}
                minutes={minutes}
                segundos={segundos}
                calculandoLaDuracion={calculandoLaDuracion}
                agregarDuracionAFirebase={agregarDuracionAFirebase}
                actualizarEstadoEnFirebase={actualizarEstadoEnFirebase}
              />
            )}
          />
        </div>
        </Switch>
      {/* </Router> */}
    </div>
  );
}
export default App;