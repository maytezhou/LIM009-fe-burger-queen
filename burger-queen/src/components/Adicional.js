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
  agregarPedido,
  nombre,
  imagen,
  dni,
  cantidad,
}) => {
  return (
    <>
      <div>
        {" "}
        {optionName} ${precio}
        {/* <img src={imagen}></img> */}
        <button
          onClick={() => {
            //agregarProducto(transformToStandar(product, precio));
            agregarPedido({
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
