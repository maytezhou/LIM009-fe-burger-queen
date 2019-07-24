import React from "react";

const Cliente = () => (
  <div>
    <div className="input-group">
      <label type="text">Cliente:</label>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
      />
      <div className="input-group-append">
        <label type="text">Mesa:</label>
        <input
          type="number"
          min="0"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
        />
      </div>
    </div>
  </div>
);
export default Cliente;
