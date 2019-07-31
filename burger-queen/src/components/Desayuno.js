import React from "react";
import Producto from "./Producto";

const Desayuno = ({ agregarProducto,allProducts }) => {
  return (
    <div data-testid="desayuno">
     {allProducts && (
        <span data-testid="desayuno-productos">
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "desayuno" && (
                <div key={ele.data().id}>
                  {ele.data().name} ${ele.data().price}{" "}
                  <button
                    onClick={() => {
                    
                      agregarProducto(ele.data());
                    }}
                  >
                    Agregar
                  </button>
                </div>
              )
          )}
        </span>
      )}
    </div>
  );
};

export default Desayuno;
