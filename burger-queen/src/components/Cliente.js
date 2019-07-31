import React from "react";
const Cliente = (inputs, handleInputChange,) => {
 
 return (
   <>
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
</>
 )
 
 };
export default Cliente;
