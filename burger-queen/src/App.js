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

  const gettingTotalCost = (arrPedidos) => {
    return arrPedidos.reduce((accum, obj) => {
      return accum + obj.costo;
    }, 0);
  };

  const agregarPedido = (producto) => {
    console.log('SOLO SE AGREGO EL PEDIDO');
    if (pedidos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = pedidos.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            cantidad: p.cantidad + 1,
            costo: p.price * (p.cantidad + 1),
          
          };
        } else {
          return p;
        }
      });
      //console.log('aaaaaaaa', newProductos2);
      // setPedidos(newProductos2);
      return setPedidos(newProductos2);
    } else {
      // si lo pide por primera vez
      const newProductos = [
        ...pedidos,
        {
          id: producto.id,
          name: producto.name,
          price: producto.price,
          menuType: producto.menuType,
          cantidad: producto.cantidad,
          costo: producto.costo,
          
        }
      ];
      console.log(newProductos);
      // setPedidos(newProductos);
     return setPedidos(newProductos);
    }
  };
  console.log(pedidos);
  const agregarOrdenFirebase = (
   arrPedidos,nameClient,numeroDeMesa
  ) => {
    console.log('SE SUBIO A FIREBASE')
    const db = firebase.firestore();
    db.collection("clients").add({
      client: nameClient,
      order: arrPedidos,
      mesa:numeroDeMesa,

    });
    setClientName('');
    setTableNumber('');
    setPedidos([]);
  };
  const eliminarProducto = (id) => {
    const newProductos = pedidos.filter((p) => p.id !== id);
    return  setPedidos(newProductos);
  };
  const disminuirCntd = (producto) => {
    if (pedidos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = pedidos.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            cantidad: p.cantidad - 1 < 0 ? 0 : p.cantidad - 1,
            costo:
              p.price * (p.cantidad - 1) < 0 ? 0 : p.price * (p.cantidad - 1)
          };
        } else {
          return p;
        }
      });
      return setPedidos(newProductos2);
    }
  };

  return (
    <div>
      <Nav logo={Logo} />
      <Orden />
      <Menu agregarPedido={agregarPedido} allProducts={allProducts} />
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
       
      />
    </div>
  );
}
export default App;
