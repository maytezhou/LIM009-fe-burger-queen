export const gettingTotalCost = (arrPedidos) => {
  return arrPedidos.reduce((accum, obj) => {
    return accum + obj.costo;
  }, 0);
};

export const agregarPedido = (producto, arrPedidos) => {
  //console.log('SOLO SE AGREGO EL PEDIDO');
  if (arrPedidos.find((p) => p.id === producto.id)) {
    // si ya lo pidio
    const newProductos2 = arrPedidos.map((p) => {
      if (p.id === producto.id) {
        return {
          ...p,
          cantidad: p.cantidad + 1,
          costo: p.price * (p.cantidad + 1)
        };
      } else {
        return p;
      }
    });
    //console.log('aaaaaaaa', newProductos2);
    // setPedidos(newProductos2);
    return newProductos2;
  } else {
    // si lo pide por primera vez
    const newProductos = [
      ...arrPedidos,
      {
        id: producto.id,
        name: producto.name,
        price: producto.price,
        menuType: producto.menuType,
        cantidad: producto.cantidad,
        costo: producto.costo
      }
    ];
    console.log(newProductos);
    // setPedidos(newProductos);
    return newProductos;
  }
};

export const eliminarProducto = (id, arrPedidos) => {
  const newProductos = arrPedidos.filter((p) => p.id !== id);
  return newProductos;
};
export const disminuirCntd = (producto, arrPedidos) => {
  if (arrPedidos.find((p) => p.id === producto.id)) {
    // si ya lo pidio
    const newProductos2 = arrPedidos.map((p) => {
      if (p.id === producto.id) {
        return {
          ...p,
          cantidad: p.cantidad - 1 < 0 ? 0 : p.cantidad - 1,
          costo: p.price * (p.cantidad - 1) < 0 ? 0 : p.price * (p.cantidad - 1)
        };
      } else {
        return p;
      }
    });
    return newProductos2;
  }
};


export const calculandoLaDuracion = (
  horaDeInicio,
  horaDeFin,
  minutosDeInicio,
  minutoDeFin,
  segundosInicio,
  segundosFin
) => {
  const hora = horaDeFin - horaDeInicio;
  const minutos = minutoDeFin - minutosDeInicio;
  let segundos = segundosFin - segundosInicio;
  
  return `${hora} : ${minutos} : ${segundos < 0 ? segundos *= -1 :segundos}`;
};