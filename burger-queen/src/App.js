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
  const agregarProducto = (producto) => {
    if (
      productos.find((p) => 
        p.id === producto.id
      )
    ) { // si ya lo pidio
      const newProductos2 = productos.map((p) => {
        if (p.id === producto.id) {
          return { ...p, cantidad: p.cantidad + 1 , costo:p.price *(p.cantidad + 1)  };
         
        } else {
          return p;
        }
      });
      return setProductos(newProductos2);
    } else { // si lo pide por primera vez 
      const newProductos = [
        ...productos,
        {
          id: producto.id,
          name: producto.name,
          price: producto.price,
          menuType: producto.menuType,
          cantidad: producto.cantidad,
          costo:producto.costo,
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
    if (
      productos.find((p) => 
        p.id === producto.id
      )
    ) { // si ya lo pidio
      const newProductos2 = productos.map((p) => {
        if (p.id === producto.id) {
          return { ...p, cantidad: p.cantidad - 1  < 0 ? 0: p.cantidad - 1, costo:p.price *(p.cantidad - 1) < 0 ? 0 : p.price *(p.cantidad - 1)};
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
      <Pedido productos={productos} eliminarProducto={eliminarProducto} agregarProducto={agregarProducto}  disminuirCntd={disminuirCntd}/>
    </div>
  );
}
export default App;
