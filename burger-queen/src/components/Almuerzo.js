import React, { useState } from 'react';

const Almuerzo = () => {
    const [tipo, setTipo] = useState('')
    
    return (
    <>
        <div>
            <input onClick={() => {setTipo('res')}} type="checkbox" id="gridCheckRes"/>
            <label for="gridCheckRes">Hamburguesa de Res</label>
            <input onClick={() => {setTipo('pollo')}} type="checkbox" id="gridCheckChicken"/>
            <label for="gridCheckChicken">Hamburguesa de Pollo</label>
            <input  onClick={() => {setTipo('vegetariana')}} type="checkbox" id="gridCheckGreen"/>
            <label for="gridCheckGreen">Hamburguesa Vegetariana</label>
        </div>
        <div>
            {tipo === 'res' && (
                <div>
                    res
                </div>
            )}
            {tipo === 'pollo' && (
                <div>
                    pollo
                </div>
            )}
            {tipo === 'vegetariana' && (
                <div>
                    vegetariana
                </div>
            )}
        </div>
    </>

    )
}
export default Almuerzo;