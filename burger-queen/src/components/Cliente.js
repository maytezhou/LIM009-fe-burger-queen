import React, {useEffect}from "react";
import PropTypes from 'prop-types';

const Cliente = ({clientName, agregarNombreDelCliente,agregarNumeroDeMesa,numeroDeMesa}) => console.log(clientName,numeroDeMesa) || (
  <div>
    <div className="input-group">
      <label type="text">Cliente:</label>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        onChange={agregarNombreDelCliente}
        value={clientName}
      />
      <div className="input-group-append">
        <label type="text">Mesa:</label>
        <input
          type="number"
          min="0"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          onChange={agregarNumeroDeMesa}
        value={numeroDeMesa}
        />
      </div>
    </div>
  </div>
);
export default Cliente;
Cliente.propTypes={
  agregarNombreDelCliente:PropTypes.func.isRequired,
  clientName:PropTypes.string.isRequired,
}
