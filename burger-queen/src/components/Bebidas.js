import React from "react";

const Bebidas = ({ allProducts, agregarPedido,pedidos,setPedidos }) => {
  return (
    <div className="mt-3 mb-3">
      {allProducts && (
        <span className="card-deck">
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "bebidas" && (
                <div
                  key={ele.data().id}
                  className="card text-center"
                  style={{ maxWidth: "20%" }}
                >
                  <div className="card-body">
                    <h5>
                      {ele.data().name} ${ele.data().price}{" "}
                    </h5>
                    <img class="card-img-top" src={ele.data().img}></img>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setPedidos(agregarPedido(ele.data(),pedidos));
                      }}
                    >
                      Agregar{" "}
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
export default Bebidas;
