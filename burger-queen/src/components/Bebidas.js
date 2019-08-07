import React from "react";

const Bebidas = ({ allProducts, agregarPedido }) => {
  return (
    <div>
      {allProducts && (
        <span>
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "bebidas" && (
                <div key={ele.data().id} className="card text-center" style={{ maxWidth: "40%" }}>
                <div className="card-body">
                <h5>{ele.data().name} ${ele.data().price}{" "}</h5>
                  <img src={ele.data().img}></img>
                  <button className="btn btn-primary"
                    onClick={() => {
                      agregarPedido(ele.data());
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
