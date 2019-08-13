import React from "react";

const Desayuno = ({ agregarPedido, allProducts, pedidos,setPedidos}) => {
  return (
    <div>
      <div data-testid="desayuno" className="row">
        {allProducts && (
          <div className="col-6">
            {allProducts.docs.map(
              (ele) =>
                ele.data().menuType === "desayuno" && (
                  <div
                    key={ele.data().id}
                    className="card-deck"
                    style={{ maxWidth: "100%" }}
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
                    <div className="">
                      <button
                        className="btn btn-success text-center"
                        onClick={() => {
                          console.log(ele.data());
                           setPedidos(agregarPedido(ele.data(), pedidos));
                          // agregarPedido(ele.data(), pedidos,setPedidos);
                        }}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Desayuno;
