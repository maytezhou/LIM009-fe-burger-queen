import React from "react";

const Total = ({
  gettingProductsOfSameClient,
  gettingTotalCost,
  allPedidos,
  clientName
}) =>  console.log(allPedidos) || (
  <div>
    total = $
    {gettingTotalCost(gettingProductsOfSameClient(allPedidos, clientName))}
  </div>
);

export default Total;
