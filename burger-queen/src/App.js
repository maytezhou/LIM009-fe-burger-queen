import React, { useState,useEffect } from "react";
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
 /* const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios(
      'https://github.com/maytezhou/LIM009-fe-burger-queen/blob/master/burger-queen/src/data/products.json',
    );
     console.log(result.data);
    setData(result.data);
  });*/
  const [clients2,setClients2]=useState([]);
   //Search git hub users 
   const searchUsers = async value=> {
  //  setLoading(true);
     // console.log(value);
      const res = await axios.get('https://github.com/maytezhou/LIM009-fe-burger-queen/blob/master/burger-queen/src/data/products.json');
      console.log(res.data)
    console.log(res.data.items); // [{},{},{}]
      setClients2(res.data.items);
      console.log(clients2);
  //  setLoading(false);    
    }

  const [allProducts] = useCollection(app.firestore().collection("producto3"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [clients] = useCollection(app.firestore().collection("clients"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [orderItems, setOrderItems] = useState([]);
  const [clientsName, setClientsName] = useState('');
  const updateInput = (e) => {
    console.log(e.target.value);
    setClientsName(e.target.value);
  };
  const addOrderToFirebase = (e) => {
    e.preventDefault();
   clients.add({ 
      clientsName,
      orderItems,
      date: '26/07/2019',
    });
    setClientsName('');
    setOrderItems([]);
  };
  const [productos, setProductos] = useState([]);
  const agregarProducto = (obj) => {
    const newProductos = [
     ...productos,
      {
        id: obj.id,
        name: obj.name,
        price: obj.price,
        menuType: obj.menuType,
        cantidad: obj.cantidad
      }
    ];
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
      <Pedido productos={productos} eliminarProducto={eliminarProducto}  clientsName={clientsName} updateInput={updateInput} />
    
    </div>
  );
}
export default App;
