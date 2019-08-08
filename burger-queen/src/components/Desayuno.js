import React from "react";
import Producto from "./Producto";

const Desayuno = ({ agregarPedido, allProducts, pedidos, setPedidos }) => {
  return (
    <div>
    <div data-testid="desayuno" className="mt-3 mb-3">
      {allProducts && (
        <span  >
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "desayuno" && (
                <div
                  key={ele.data().id}
                  className="card text-center"
                  style={{ maxWidth: "50%" }}
                >
                  <div className="card-body">
                    <h6 className="card-title">
                      {ele.data().name} ${ele.data().price}{" "}
                    </h6>
                    <img
                      src={ele.data().img}
                      className="card-img-top"
                      alt="..."
                    ></img>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        console.log(ele.data());
                        setPedidos(agregarPedido(ele.data(), pedidos));
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
    </div>
  );
};

export default Desayuno;
