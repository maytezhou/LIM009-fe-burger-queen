import MockFirebase from "mock-cloud-firestore";

import {
  agregarPedido,
  eliminarProducto,
  disminuirCntd,
  gettingTotalCost
} from "../../controller/pedidos";
const fixtureData = {
  __collection__: {
    producto3: {
      __doc__: {
        ABC001: {
          cantidad: 1,
          costo: 5,
          id: 9,
          img: "https://i.postimg.cc/ncddyB4Z/aros-de-cebolla.png",
          menuType: "acompañamiento",
          name: "Aros de cebolla",
          price: 5
        },
        ABC002: {
          cantidad: 1,
          costo: 7,
          id: 2,
          img: "https://i.postimg.cc/ncddyB4Z/aros-de-cebolla.png",
          menuType: "desayuno",
          name: "Café con leche",
          price: 7
        },
        ABC003: {
          id: 7,
          menuType: "almuerzoYcena",
          name: "Hamburguesa vegetariana",
          type: {
            doble: {
              huevo: {
                cantidad: 1,
                id: 33,
                img:
                  "https://i.postimg.cc/y875YdwY/hamburguesa-doble-huevo.png",
                name: "Hamburguesa vegetariana doble con huevo",
                price: 16
              },
              queso: {
                cantidad: 1,
                id: 32,
                img:
                  "https://i.postimg.cc/y875YdwY/hamburguesa-doble-queso.png",
                name: "Hamburguesa vegetariana doble con queso",
                price: 16
              },
              solo: {
                cantidad: 1,
                id: 31,
                img: "https://i.postimg.cc/y875YdwY/hamburguesa-doble.png",
                name: "Hamburguesa vegetariana doble",
                price: 15
              }
            },
            simple: {
              huevo: {
                cantidad: 1,
                id: 30,
                img:
                  "https://i.postimg.cc/y875YdwY/hamburguesa-simple-huevo.png",
                name: "Hamburguesa vegetariana simple con huevo",
                price: 11
              },
              queso: {
                cantidad: 1,
                id: 29,
                img:
                  "https://i.postimg.cc/y875YdwY/hamburguesa-simple-queso.png",
                name: "Hamburguesa vegetariana simple con queso",
                price: 11
              },
              solo: {
                cantidad: 1,
                id: 28,
                img:
                  "https://i.postimg.cc/y875YdwY/hamburguesa-simple-solo.png",
                name: "Hamburguesa vegetariana simple",
                price: 10
              }
            }
          }
        }
      }
    },
    clients: {
      __doc__: {
        AO68SwmRrYPO6qjaCorCGgWFaSX2: {
          client: "Narda Crocco",
          mesa: 1,
          order: [
            {
              cantidad: 3,
              costo: 15,
              id: 9,
              menuType: "acompañamiento",
              name: "Aros de cebolla",
              price: 5
            }
          ]
        },
        AeC4tzlg9tNq4kcugc1u7y7ThIz2: {
          client: "Mayte Souza",
          mesa: 2,
          order: [
            {
              cantidad: 2,
              costo: 14,
              id: 2,
              menuType: "desayuno",
              name: "Café con leche",
              price: 7
            }
          ]
        },
        E5NDXeIZrZbOCfMKyPJPmOJ5BQG2: {
          client: "Judith",
          mesa: 3,
          order: [
            {
              cantidad: 1,
              costo: 16,
              id: 32,
              menuType: "almuerzoYcena",
              name: "Hamburguesa vegetarian doble con queso",
              price: 16
            },
            {
              cantidad: 2,
              costo: 20,
              id: 28,
              menuType: "almuerzoYcena",
              name: "Hamburguesa vegetariana simple",
              price: 10
            }
          ]
        }
      }
    }
  }
};
global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true
});
const arrPedidos = [
  {
    cantidad: 3,
    costo: 15,
    id: 9,
    menuType: "acompañamiento",
    name: "Aros de cebolla",
    price: 5
  },
  {
    cantidad: 2,
    costo: 14,
    id: 2,
    menuType: "desayuno",
    name: "Café con leche",
    price: 7
  }
];
const pedido = {
  cantidad: 2,
  costo: 20,
  id: 28,
  menuType: "almuerzoYcena",
  name: "Hamburguesa vegetariana simple",
  price: 10
};
const pedidoDisminuido=[
  {
    cantidad: 3,
    costo: 15,
    id: 9,
    menuType: "acompañamiento",
    name: "Aros de cebolla",
    price: 5
  },
  {
    cantidad: 2,
    costo: 14,
    id: 2,
    menuType: "desayuno",
    name: "Café con leche",
    price: 7
  },
  {
    cantidad: 1,
    costo: 10,
    id: 28,
    menuType: "almuerzoYcena",
    name: "Hamburguesa vegetariana simple",
    price: 10
  }
];
const arrPedidos2 = [
  {
    cantidad: 3,
    costo: 15,
    id: 9,
    menuType: "acompañamiento",
    name: "Aros de cebolla",
    price: 5
  },
  {
    cantidad: 2,
    costo: 14,
    id: 2,
    menuType: "desayuno",
    name: "Café con leche",
    price: 7
  },
  {
    cantidad: 2,
    costo: 20,
    id: 28,
    menuType: "almuerzoYcena",
    name: "Hamburguesa vegetariana simple",
    price: 10
  }
];

describe("agregarPedido", () => {
  it("debería ser una función", () => {
    expect(typeof agregarPedido).toBe("function");
  });
  it("deberia retornar un array de objetos con el nuevo objeto agregado", () => {
    expect(agregarPedido(pedido, arrPedidos)).toEqual(arrPedidos2);
  });
});
describe("eliminarProducto", () => {
  it("debería ser una función", () => {
    expect(typeof eliminarProducto).toBe("function");
  });
  it("deberia eliminar un producto de la lista de pedidos", () => {
    expect(eliminarProducto(pedido.id, arrPedidos2)).toEqual(arrPedidos);
  });
});
describe("disminuirCntd", () => {
  it("debería ser una función", () => {
    expect(typeof disminuirCntd).toBe("function");
  });
  it("deberia disminuir la cantidad de productos del pedido", () => {
    expect(disminuirCntd(pedido, arrPedidos2)).toEqual(pedidoDisminuido);
  });
});
describe("gettingTotalCost", () => {
  it("debería ser una función", () => {
    expect(typeof gettingTotalCost).toBe("function");
  });
  it("deberia disminuir la cantidad de productos del pedido", () => {
    expect(gettingTotalCost(arrPedidos2)).toEqual(49);
  });
});
