import React from "react";

const Total = ({ pedidos, gettingTotalCost }) => (
   <div>total = ${gettingTotalCost(pedidos)}</div>
);

export default Total;
