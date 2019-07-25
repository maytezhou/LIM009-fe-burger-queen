import React, { useState } from "react";
import Nav from "./components/Nav";
import Orden from "./components/Orden";
import "./App.css";
import Menu from "./components/Menu";
import Pedido from "./components/Pedido";
import Logo from "./img/logoBq.png";
import { useCollection } from "react-firebase-hooks/firestore";
import app from "../src/components/Firebase";

function App() {
  const [allProducts] = useCollection(app.firestore().collection("producto3"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [productos, setProductos] = useState([]);
  const agregarProducto = (obj) => {
    // const newProductos = [
    //   ...productos,
    //   {
    //     id: obj.id,
    //     name: obj.name,
    //     price: obj.price,
    //     menuType: obj.menuType,
    //     cantidad: obj.cantidad
    //   }
    // ];
     const newProductos = 
     productos.map((product)=>{

     })
    console.log(newProductos);
    setProductos(newProductos);
  };
  const eliminarProducto = (id) => {
    const newProductos = productos.filter((p) => p.id !== id);
    setProductos(newProductos);
  };
  return (
    <div>
      <Nav logo={Logo} />
      <Orden />
      <Menu agregarProducto={agregarProducto} allProducts={allProducts} />
      <Pedido productos={productos} eliminarProducto={eliminarProducto} />
    </div>
  );
}
export default App;
