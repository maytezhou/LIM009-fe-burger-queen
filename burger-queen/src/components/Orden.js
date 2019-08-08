import React from "react";

const Orden = ({ setPedidos, setClientName, setTableNumber }) => (
  <div className="trans text-center">
    <button
      data-testid="new-order-btn"
      type="button"
      className="btn btn-primary mx-2 px-5 mb-3 mt-3 aos-init aos-animate"
      onClick={() => {
        setPedidos([]);
        setClientName("");
        setTableNumber("");
      }}
    >
      Nueva Orden
    </button>
    <button
      data-testid="order-list-btn"
      type="button"
      className="btn btn-primary mx-2 px-5 mb-3 mt-3 aos-init aos-animate"
    >
      Lista de ordenes
    </button>
  </div>
);
export default Orden;
