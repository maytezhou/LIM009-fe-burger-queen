import React, {useState} from 'react';
import Nav from './components/Nav';
import Orden from './components/Orden';
import './App.css';
import Menu from './components/Menu';
import Desayuno from './components/Desayuno';
import Pedido from './components/Pedido';
import Logo from './img/logoBq.png';

function App() {
  
  const [productos, setProductos] = useState([]);
  const agregarProducto = (obj) => {
    const newProductos = [...productos, { id:obj.id,name:obj.name,price:obj.price,menuType:obj.menuType }]
    console.log(newProductos);
    setProductos(newProductos)
  }
  const eliminarProducto = (id) => {
    const newProductos = productos.filter(p => p.id !== id)
    setProductos(newProductos)
  }
  return (
    <div>
      <Nav logo ={Logo}/>
      <Orden/>
      <Menu agregarProducto={agregarProducto}/>
      <Pedido productos={productos} eliminarProducto={eliminarProducto} />
    </div>
  )
}
export default App;

