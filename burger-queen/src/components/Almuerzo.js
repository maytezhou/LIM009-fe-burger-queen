import React, { useState } from "react";
import Adicional from "./Adicional";

const Almuerzo = ({ allProducts, agregarPedido, pedidos, setPedidos }) => {
  const [state, setState] = useState({
    hamburgerType: null, //  los dos tipos ya sea simple o doble
    tipo: null //los tres tipos de hamburguesas que existen res,pollo,vegetariana
  });

  return (
    <div>
      {allProducts && (
        <>
          {allProducts.docs
            .filter((ele) => ele.data().menuType === "almuerzoYcena" && ele)
            .map((doc) => (
              <div key={doc.data().id}>
                <input
                  onClick={() => {
                    setState({
                      ...state, // copia las propiedades  y su valores  anteriores  del estado ( la primera vez es el estado inicial)
                      hamburgerType: null, // como hamburgerType es una estado que comparten los tres tipos de hamburguesas (res,pollo y vegetariana)
                      // cada vez que la persona hace click en otra opcion diferente a la clickeada anteriormente
                      // se necesita reiniciar el valor de la propiedad hamburguerType para que los botones simple o doble no esten clickeados
                      tipo: doc.data().name // actualiza el valor de la propiedad tipo con ( un string )
                      //   el nombre de cada tipo de hamburguesa ya sea Hamburguesa de res/de pollo/vegetariana
                    });
                  }}
                  type="radio"
                  id="gridCheckRes"
                  name="hamburguesas"
                />
                <label htmlFor="gridCheckRes">{doc.data().name}</label>
                {state.tipo === doc.data().name && ( // si el tipo de hamburguesa que selecciono el usuario (guardada previamente en el estado) es igual al tipo de hamburguesa  (de res/de pollo/ vegetariana)
                  //  disponible ( en firebase) entonces que renderize los dos botones simple y doble
                  <>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          // si la persona  hace click en  el boton simple entonces
                          setState((state) => ({
                            ...state, // que copie las propiedades anteriores del estado // para saber cual de los 3 tipos  de hamburguesa fue seleccionada
                            hamburgerType: "simple" // que actualice el valor de     hamburguer Type  a simple
                          }));
                        }}
                      >
                        Simple $ 10
                      </button>
                      {/* // si el  tipo de hamburguesa seleccionada es igual a simple entonces que  renderize  las opciones solo,queso,huevo del objeto simple */}
                      {state.hamburgerType === "simple" &&
                        ["solo", "huevo", "queso"].map((item) => (
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={item}
                            precio={
                              doc.data().type[state.hamburgerType][item].price
                            }
                            cantidad={
                              doc.data().type[state.hamburgerType][item]
                                .cantidad
                            }
                            nombre={
                              doc.data().type[state.hamburgerType][item].name
                            }
                            imagen={
                              doc.data().type[state.hamburgerType][item].img
                            }
                            dni={doc.data().type[state.hamburgerType][item].id}
                            pedidos={pedidos}
                            setPedidos={setPedidos}
                          />
                        ))}
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          // si la persona  hace click en  el boton doble entonces
                          setState((state) => ({
                            ...state, // que copie las propiedades anteriores del estado // para saber cual de los 3 tipos  de hamburguesa fue seleccionada
                            hamburgerType: "doble" // que actualice el valor de     hamburguer Type  a doble
                          }));
                        }}
                      >
                        Doble $15
                      </button>
                      {/* // si el  tipo de hamburguesa seleccionada es igual a doble entonces que  renderize  las opciones solo,queso,huevo del objeto doble */}
                      {state.hamburgerType === "doble" &&
                        ["solo", "huevo", "queso"].map((item) => (
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={item}
                            cantidad={
                              doc.data().type[state.hamburgerType][item]
                                .cantidad
                            }
                            precio={
                              doc.data().type[state.hamburgerType][item].price
                            }
                            nombre={
                              doc.data().type[state.hamburgerType][item].name
                            }
                            imagen={
                              doc.data().type[state.hamburgerType][item].img
                            }
                            dni={doc.data().type[state.hamburgerType][item].id}
                            pedidos={pedidos}
                            setPedidos={setPedidos}
                          />
                        ))}
                    </div>
                  </>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Almuerzo;
