import React, { useState } from "react";
import Desayuno from "./Desayuno";
import Almuerzo from "./Almuerzo";
import Acompañamientos from "./Acompa\u00F1amientos";
import Bebidas from "./Bebidas";

const Menu = ({ agregarProducto, allProducts}) => {
  const [tipo, setTipo] = useState("desayuno");
  return (
    <>
      <div>
        <button
          onClick={() => {
            setTipo("desayuno");
          }}
          type="button"
          className="btn btn-info"
        >
          Desayuno
        </button>
        <button
          onClick={() => {
            setTipo("almuerzo");
          }}
          type="button"
          className="btn btn-info"
        >
          Almuerzo y Cena
        </button>
        <button
          onClick={() => {
            setTipo("acompañamiento");
          }}
          type="button"
          className="btn btn-info"
        >
          Acompañamientos
        </button>
        <button
          onClick={() => {
            setTipo("bebidas");
          }}
          type="button"
          className="btn btn-info"
        >
          Bebidas
        </button>
      </div>
      <div data-testid="content">
        {tipo === "desayuno" && (
          <div>
            <Desayuno agregarProducto={agregarProducto}  allProducts={allProducts}/>
          </div>
        )}
        {tipo === "almuerzo" && (
          <div>
            <Almuerzo agregarProducto={agregarProducto} allProducts={allProducts}  
                           />
          </div>
        )}
        {tipo === "acompañamiento" && (
          <div>
            <Acompañamientos agregarProducto={agregarProducto} allProducts={allProducts}/>
          </div>
        )}
        {tipo === "bebidas" && (
          <div>
            <Bebidas agregarProducto={agregarProducto} allProducts={allProducts}/>
          </div>
        )}
      </div>
    </>
  );
};
export default Menu;
