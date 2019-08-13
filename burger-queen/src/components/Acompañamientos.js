import React from "react";

const Acompañamientos = ({
  allProducts,
  agregarPedido,
  pedidos,
  setPedidos
}) => {
  return (
    <div className="card-group">
      {allProducts && (
        <div className="row">
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "acompañamiento" && (
                <div
                  key={ele.data().id}
                  className="col-6"
                  style={{ maxWidth: "50%" }}
                >
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      alt="..."
                      src={ele.data().img}
                    ></img>
                  </div>
                  <div className="mb-3">
                    <h4 className="card-title text-center">
                      {ele.data().name} ${ele.data().price}{" "}
                    </h4>
                    <button
                      className="btn mb-4 btn-verde center"
                      onClick={() => {
                        setPedidos(agregarPedido(ele.data(), pedidos));
                      }}
                    >
                      Agregar{" "}
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};
export default Acompañamientos;
