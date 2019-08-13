import React from "react";

const Total = ({ pedidos, gettingTotalCost }) => (
   <div>TOTAL = ${gettingTotalCost(pedidos)}</div>
);

export default Total;
