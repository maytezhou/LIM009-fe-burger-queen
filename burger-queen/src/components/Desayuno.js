import React from "react";
import Producto from "./Producto";

const Desayuno = ({ agregarPedido,allProducts,pedidos,setPedidos}) => {
  return (
    <div data-testid="desayuno">
     {allProducts && (
        <span data-testid="desayuno-productos">
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "desayuno" && (
                <div key={ele.data().id} className="card text-center" style={{ maxWidth: "40%" }}>
                 <div className="card-body">
                 <h5 className="card-title">{ele.data().name} ${ele.data().price}{" "}</h5>
                  <img src={ele.data().img}class="card-img-top" alt="..."></img>
                  <button className="btn btn-primary"
                    onClick={() => {
                      console.log(ele.data());
                      setPedidos(agregarPedido(ele.data(),pedidos));
                    }}
                  >
                    Agregar
                  </button>
                  </div> 
                </div>
              )
          )}
        </span>
      )}
    </div>
  );
};

export default Desayuno;

