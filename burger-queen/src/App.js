import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Nav from "./components/Nav";
import Orden from "./components/Orden";
import "./App.css";
import Menu from "./components/Menu";
import Pedido from "./components/Pedido";
import Logo from "./img/logoBq.png";
import { useCollection } from "react-firebase-hooks/firestore";
import app from "../src/components/Firebase";
import axios from 'axios';


function App() {
  const [productos, setProductos] = useState([]);
  const [clientName, setClientName] = useState("");
  const [numeroDeMesa, setTableNumber] = useState("");
  //llamanndo colleccion prodeuctos
  const [allProducts] = useCollection(app.firestore().collection("producto3"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  //llamando colleccion clientes
  const [allPedidos] = useCollection(app.firestore().collection("clients"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const agregarNombreDelCliente = (e) => setClientName(e.target.value);
  const agregarNumeroDeMesa = (e) => setTableNumber(e.target.value);

  const gettingProductsOfSameClient = (arrObj, nameClient) => {
    const orderBySameClient = arrObj.docs.filter(
      (orden) => {
        console.log(orden.data());
        return orden.data().client === nameClient
      }
    );
    return orderBySameClient;
  };
  const gettingTotalCost = (arrProductosSameClient) => {
    console.log(arrProductosSameClient);
    return arrProductosSameClient.reduce((accum, obj) => {
      return accum + obj.data().costo;
    }, 0);
  };

  const agregarOrden = (
    nameClient,
    numeroDeMesa,
    productoName,
    price,
    costo,
    cantidad
  ) => {
    const db = firebase.firestore();
    db.collection("clients").add({
      client: nameClient,
      id: 3,
      order: productoName,
      price,
      cantidad,
      costo,
      mesa: numeroDeMesa
    });
  };

  const agregarProducto = (producto) => {
    if (productos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = productos.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            cantidad: p.cantidad + 1,
            costo: p.price * (p.cantidad + 1)
          };
        } else {
          return p;
        }
      });
      return setProductos(newProductos2);
    } else {
      // si lo pide por primera vez
      const newProductos = [
        ...productos,
        {
          id: producto.id,
          name: producto.name,
          price: producto.price,
          menuType: producto.menuType,
          cantidad: producto.cantidad,
          costo: producto.costo
        }
      ];
      console.log(newProductos);
      setProductos(newProductos);
    }
  };
  const eliminarProducto = (id) => {
    const newProductos = productos.filter((p) => p.id !== id);
    setProductos(newProductos);
  };
  const disminuirCntd = (producto) => {
    if (productos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = productos.map((p) => {
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
      return setProductos(newProductos2);
    }
  };

  return (
    <div>
      <Nav logo={Logo} />
      <Orden />
      <Menu agregarProducto={agregarProducto} allProducts={allProducts} />
      <Pedido
        productos={productos}
        eliminarProducto={eliminarProducto}
        agregarProducto={agregarProducto}
        disminuirCntd={disminuirCntd}
        clientName={clientName}
        agregarNombreDelCliente={agregarNombreDelCliente}
        agregarOrden={agregarOrden}
        agregarNumeroDeMesa={agregarNumeroDeMesa}
        numeroDeMesa={numeroDeMesa}
        gettingProductsOfSameClient={gettingProductsOfSameClient}
        gettingTotalCost={gettingTotalCost}
        allPedidos={allPedidos}
      />
    </div>
  );
}
export default App;
