import React from "react";

const Acompañamientos = ({ allProducts, agregarProducto }) => {
  return (
    <div>
      {allProducts && (
        <span>
          {allProducts.docs.map(
            (ele) =>
              ele.data().menuType === "acompañamiento" && (
                <div key={ele.data().id}>
                  {ele.data().name} ${ele.data().price}{" "}
                  <button
                    onClick={() => {
                      agregarProducto(ele.data());
                    }}
                  >
                    Agregar{" "}
                  </button>
                </div>
              )
          )}
        </span>
      )}
    </div>
  );
};
export default Acompañamientos;
