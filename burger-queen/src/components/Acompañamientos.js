import React from "react";

const Acompañamientos = ({ allProducts, agregarPedido, pedidos, setPedidos }) => {
  return (
    <div className="mt-3 mb-3">
      {allProducts && (
        <span className="card-deck">
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "acompañamiento" && (
                <div key={ele.data().id} className="card text-center" style={{ maxWidth: "20%" }} >
                <div className="card-body">
                <h5>{ele.data().name} ${ele.data().price}{" "}</h5>
                  <img className="card-img-top" alt="..." src={ele.data().img}></img>
                  </div>
                  <div className="mb-3">
                  <button class="btn btn-success"
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
export default Acompañamientos;
