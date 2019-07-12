import React, { useState } from 'react';
import Desayuno from './Desayuno';
import Almuerzo from './Almuerzo';

const Menu = () => {
    const [tipo, setTipo] = useState('desayuno')
    return(
        <>
            <div>
                <button onClick={() => {setTipo('desayuno')}} type="button" className="btn btn-info">Desayuno</button>
                <button onClick={() => {setTipo('almuerzo')}} type="button" className="btn btn-info">Almuerzo y Cena</button>
                <button onClick={() => {setTipo('acompañamiento')}} type="button" className="btn btn-info">Acompañamientos</button>
                <button onClick={() => {setTipo('bebidas')}} type="button" className="btn btn-info">Bebidas</button>      
            </div>
            <div>
                {tipo === 'desayuno' && (
                    <div>
                         <Desayuno/>
                    </div>
                )}
                {tipo === 'almuerzo' && (
                    <div>
                        <Almuerzo/>
                    </div>
                )}
                {tipo === 'acompañamiento' && (
                    <div>
                         acompañamiento
                    </div>
                )}
                {tipo === 'bebidas' && (
                    <div>
                         bebidas
                    </div>
                )}
            </div>
        </>
    )
    
    }
 export default Menu;