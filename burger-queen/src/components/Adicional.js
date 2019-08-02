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
  dni,
  cantidad,
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
              id: dni,
             cantidad:cantidad,
             costo:precio * cantidad,
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
