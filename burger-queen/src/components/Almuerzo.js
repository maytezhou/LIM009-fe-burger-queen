import React, { useState } from "react";
import Adicional from "./Adicional";

const Almuerzo = ({ allProducts, agregarPedido }) => {
  const [tipo, setTipo] = useState("");
  const [simple, setSimple] = useState(null);
  const [doble, setDoble] = useState(null);

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
                    setSimple(null);
                    setDoble(null);
                    setTipo(doc.data().name);
                   
                  }}
                  type="radio"
                  id="gridCheckRes"
                  name="hamburguesas"
                />
                <label htmlFor="gridCheckRes">{doc.data().name}</label>
                {tipo === doc.data().name && (
                  <>
                    <div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          setSimple(doc.data().type.simple);
                        }}
                      >
                        Simple $ 10
                      </button>
                      {simple && (
                        <>
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={"solo"}
                            precio={doc.data().type.simple.solo.price}
                            cantidad={doc.data().type.simple.solo.cantidad}
                            nombre={doc.data().type.simple.solo.name}
                            dni={doc.data().type.simple.solo.id}
                          />
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={"huevo"}
                            cantidad={doc.data().type.simple.huevo.cantidad}
                            precio={doc.data().type.simple.huevo.price}
                            nombre={doc.data().type.simple.huevo.name}
                            dni={doc.data().type.simple.huevo.id}
                          />
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={"queso"}
                            cantidad={doc.data().type.simple.queso.cantidad}
                            precio={doc.data().type.simple.queso.price}
                            nombre={doc.data().type.simple.queso.name}
                            dni={doc.data().type.simple.queso.id}
                          />
                        </>
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          setDoble(doc.data().type.doble);
                        }}
                      >
                        Doble $15
                      </button>
                      {doble && (
                        <>
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={"solo"}
                            cantidad={doc.data().type.doble.solo.cantidad}
                            precio={doc.data().type.doble.solo.price}
                            nombre={doc.data().type.doble.solo.name}
                            dni={doc.data().type.doble.solo.id}
                          />
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={"huevo"}
                            cantidad={doc.data().type.doble.huevo.cantidad}
                            precio={doc.data().type.doble.huevo.price}
                            nombre={doc.data().type.doble.huevo.name}
                            dni={doc.data().type.doble.huevo.id}
                          />
                          <Adicional
                            agregarPedido={agregarPedido}
                            product={doc.data()}
                            optionName={"queso"}
                            cantidad={doc.data().type.doble.queso.cantidad}
                            precio={doc.data().type.doble.queso.price}
                            nombre={doc.data().type.doble.queso.name}
                            dni={doc.data().type.doble.queso.id}
                          />
                        </>
                      )}
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
