import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Cliente from './components/Cliente'
import Menu from './components/Menu';
//import Desayuno from './components/desayuno';

function App() {
  return (
    <div>
      <Nav/>
      <Cliente/>
      <Menu/>
    </div>
  )
}
export default App;

