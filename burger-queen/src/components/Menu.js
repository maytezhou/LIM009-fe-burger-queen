import React, { useState } from "react";
import Desayuno from "./Desayuno";
import Almuerzo from "./Almuerzo";
import Acompañamientos from "./Acompa\u00F1amientos";
import Bebidas from "./Bebidas";

const Menu = ({ agregarPedido, allProducts, pedidos, setPedidos }) => {
  const [tipo, setTipo] = useState("desayuno");
  return (
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
        className="btn btn-info "
      >
        Almuerzo y Cena
      </button>

      <button
        onClick={() => {
          setTipo("acompañamiento");
        }}
        type="button"
        className="btn btn-info "
      >
        Acompañamientos
      </button>

      <button
        onClick={() => {
          setTipo("bebidas");
        }}
        type="button"
        className="btn btn-info "
      >
        Bebidas
      </button>

      {tipo === "desayuno" && (
        <div>
          <Desayuno
            data-testid="desayuno-producto"
            agregarPedido={agregarPedido}
            allProducts={allProducts}
            pedidos={pedidos}
            setPedidos={setPedidos}
          />
        </div>
      )}
      {tipo === "almuerzo" && (
        <div>
          <Almuerzo
            agregarPedido={agregarPedido}
            allProducts={allProducts}
            pedidos={pedidos}
            setPedidos={setPedidos}
          />
        </div>
      )}
      {tipo === "acompañamiento" && (
        <div>
          <Acompañamientos
            agregarPedido={agregarPedido}
            allProducts={allProducts}
            pedidos={pedidos}
            setPedidos={setPedidos}
          />
        </div>
      )}
      {tipo === "bebidas" && (
        <div>
          <Bebidas
            data-testid="bebidas-producto"
            agregarPedido={agregarPedido}
            allProducts={allProducts}
            pedidos={pedidos}
            setPedidos={setPedidos}
          />
        </div>
      )}
    </div>
  );
};
export default Menu;
