import React from "react";

const PedidoDeUnCliente = ({ pedido }) => {
  return (
    <div>
      {pedido.data().order.map((p) => (
        <tr>
          <td>{p.cantidad}</td>
          <td>{p.name}</td>
          <td>${p.costo}</td>
        </tr>
      ))}
    </div>
  );
};
export default PedidoDeUnCliente;
