import React from "react";

import Producto from "./Producto";
import useSignUpForm from './CustomHooks';

const Pedido = ({ productos, eliminarProducto , addOrderToFirebase }) => {
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
  return (
   
    <form onSubmit={handleSubmit}  >
    <div className="card text-white bg-info mb-3" style={{ maxWidth: "50%" }}>
      <div className="card-header">
      <div>
  <div className="input-group">
    <label type="text">Cliente:</label>
    <input
      type="text"
      name="client"
      id="client"
      placeholder="Nombre del cliente"
      onChange={handleInputChange} 
      value={inputs.client} required
      className="form-control"
      data-testid="client-input"
      type="text"
      aria-label="Text input with segmented dropdown button"
    />
    <div className="input-group-append">
      <label type="text">Mesa:</label>
      <input
      name="table"
        type="number"
        min="0"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        onChange={handleInputChange} 
        value={inputs.table} required
      />
    </div>
  </div>
</div>
      </div>
      <div className="card-body">
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <Producto
                  key={p.id}
                  producto={p}
                  eliminarProducto={eliminarProducto}
                  addOrderToFirebase={addOrderToFirebase}
                  
                
                />
              ))}
            </tbody>
          </table>
          <button type="submit">Enviar a cocina</button>
        </div>
      </div>
    </div>
    </form>
  
  );
};
export default Pedido;
