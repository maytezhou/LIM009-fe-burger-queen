import React from "react";

const Desayuno = ({ agregarPedido, allProducts, pedidos, setPedidos }) => {
  return (
    <div className="card-group">
      <div data-testid="desayuno">
        {allProducts && (
          <div className="row">
            {allProducts.docs.map(
              (ele) =>
                ele.data().menuType === "desayuno" && (
                  <div
                    key={ele.data().id}
                    className="col-6"
                    style={{ maxWidth: "50%" }}
                  >
                    <div className="card-body">
                      <img
                        src={ele.data().img}
                        className="card-img-top"
                        alt="..."
                      ></img>
                    </div>
                    <div>
                      <h4 className="card-title text-center">
                        {ele.data().name}  ${ele.data().price}
                      </h4>
                      <button
                        className="btn mb-4 btn-verde center"
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
