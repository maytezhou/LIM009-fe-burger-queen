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
  pedidos,
  setPedidos,
}) => {
  return (
    <>
      <div className="card text-center" style={{ maxWidth: "40%" }}>
        {" "}
        <div className="card-body">
        <h5 className="card-title">{optionName} ${precio}</h5>
        <img  className="card-title" src={imagen}></img>
        <button className="btn btn-primary"
          onClick={() => {
            //agregarProducto(transformToStandar(product, precio));
            setPedidos(agregarPedido({
              ...product,
              price: precio,
              name: nombre,
              id: dni,
             cantidad:cantidad,
             costo:precio * cantidad,
             
            }, pedidos));
          }}
        >
          Agregar{" "}
        </button>
        </div>
        
      </div>
    </>
  );
};
export default Adicional;
