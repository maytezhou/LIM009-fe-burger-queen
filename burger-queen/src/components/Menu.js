import React, { useState } from 'react';
import Desayuno from './Desayuno';
import Almuerzo from './Almuerzo';
import Acompañamientos from './Acompa\u00F1amientos';
import Bebidas from './Bebidas';

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
            <div data-testid='content'>
                {tipo === 'desayuno' && (
                    <div data-testid='desayuno'>
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
                         <Acompañamientos/>
                    </div>
                )}
                {tipo === 'bebidas' && (
                    <div>
                         <Bebidas/>
                    </div>
                )}
            </div>
        </>
    )
    
    }
 export default Menu;