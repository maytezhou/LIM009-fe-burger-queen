import React, {useState} from 'react';
import Nav from './components/Nav';
import Orden from './components/Orden';
import './App.css';
import Menu from './components/Menu';
import Desayuno from './components/Desayuno';
import Pedido from './components/Pedido';
import Logo from './img/logoBq.png'

function App() {
  const [producto1, setProducto1] = useState('');
  const [price1, setPrice1] = useState(0);
  return (
    <div>
      <Nav logo ={Logo}/>
      <Orden/>
      <Menu/>
      <Pedido/>
    </div>
  )
}
export default App;

