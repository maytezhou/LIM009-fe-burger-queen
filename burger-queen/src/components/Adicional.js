import React from "react";
// const transformToStandar = (obj, price) => {
//   const newObj = {
//     ...obj,
//     price
//   };
//   return newObj;
// };

const Adicional = ({
  product,
  precio,
  optionName,
  agregarProducto,
  nombre,
  dni
}) => {
  return (
    <>
      <div>
        {" "}
        {optionName} ${precio}
        <button
          onClick={() => {
            //agregarProducto(transformToStandar(product, precio));
            agregarProducto({
              ...product,
              price: precio,
              name: nombre,
              id: dni
            });
          }}
        >
          Agregar{" "}
        </button>
      </div>
    </>
  );
};
export default Adicional;
