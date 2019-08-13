import React from "react";
import PropTypes from "prop-types";

const Cliente = ({
  clientName,
  agregarNombreDelCliente,
  agregarNumeroDeMesa,
  numeroDeMesa
}) => (
  <div className="input-group">
    <label type="text" className="label-txt">
      Cliente
      </label>
      <input
        type="text"
        name="client"
        id="client"
        onChange={agregarNombreDelCliente}
        value={clientName}
        required
        className="form-control"
        data-testid="client-input"
        //aria-label="Text input with segmented dropdown button"
      />
    
    <label type="text" className="label-txt">
      Mesa
      </label>
      <input
        type="number"
        min="0"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        onChange={agregarNumeroDeMesa}
        value={numeroDeMesa}
      />
    
  </div>
);
export default Cliente;
Cliente.propTypes = {
  agregarNombreDelCliente: PropTypes.func.isRequired,
  clientName: PropTypes.string.isRequired
};
