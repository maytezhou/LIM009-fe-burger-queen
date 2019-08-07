import React from "react";

const Acompañamientos = ({ allProducts, agregarPedido }) => {
  return (
    <div>
      {allProducts && (
        <span>
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "acompañamiento" && (
                <div key={ele.data().id} className="card text-center" style={{ maxWidth: "40%" }}>
                <div className="card-body">
                <h5>{ele.data().name} ${ele.data().price}{" "}</h5>
                  <img className="card-img-top" alt="..." src={ele.data().img}></img>
                  <button class="btn btn-primary"
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
export default Acompañamientos;
