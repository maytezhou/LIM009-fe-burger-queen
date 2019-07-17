import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase'



const Almuerzo = () => {
    const [tipo, setTipo] = useState('')
    const [value, loading, error] = useCollection(
      app.firestore().collection('almuerzoYcena'),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );
     
    return (
      <div>
          {error && <strong>Error: {error}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <span>
              {' '}

              {value.docs.filter((ele)=>ele.data().category==='hamburguesa' && ele.data().type==='simple'?ele:'').map(doc => (
                //<div key={doc.data().id}>{doc.data().name} {doc.data().price}</div>
                <div>
            { doc.data().name==='Hamburguesa de res'
            ?
            <>
                <input onClick={() => {setTipo('res')}} type="checkbox" id="gridCheckRes"/>
                <label htmlFor="gridCheckRes">{doc.data().name ==='Hamburguesa de res' ?doc.data().name:'' }</label>
            </>
             :
             ''}
              { doc.data().name==='Hamburguesa de pollo'
            ?
            <>
                <input onClick={() => {setTipo('pollo')}} type="checkbox" id="gridCheckChicken"/>
                <label htmlFor="gridCheckChicken">{doc.data().name ==='Hamburguesa de pollo' ?doc.data().name:'' }</label>
            </>
             :
             ''}
              { doc.data().name==='Hamburguesa vegetariana'
            ?
            <>
                <input onClick={() => {setTipo('vegetariana')}} type="checkbox" id="gridCheckGreen"/>
                <label htmlFor="gridCheckGreen">{doc.data().name ==='Hamburguesa vegetariana' ?doc.data().name:'' }</label>
            </>
             :
             ''}
        </div>
              
              ))}
            </span>
          )}
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
      </div>
    );
  };

// const Almuerzo = () => {
//     const [tipo, setTipo] = useState('')
   
    
//     return (
//     <>
        // <div>
        //     <input onClick={() => {setTipo('res')}} type="checkbox" id="gridCheckRes"/>
        //     <label for="gridCheckRes">Hamburguesa de Res</label>
        //     <input onClick={() => {setTipo('pollo')}} type="checkbox" id="gridCheckChicken"/>
        //     <label for="gridCheckChicken">Hamburguesa de Pollo</label>
        //     <input  onClick={() => {setTipo('vegetariana')}} type="checkbox" id="gridCheckGreen"/>
        //     <label for="gridCheckGreen">Hamburguesa Vegetariana</label>
        // </div>
        // <div>
        //     {tipo === 'res' && (
        //         <div>
        //             res
        //         </div>
        //     )}
        //     {tipo === 'pollo' && (
        //         <div>
        //             pollo
        //         </div>
        //     )}
        //     {tipo === 'vegetariana' && (
        //         <div>
        //             vegetariana
        //         </div>
        //     )}
        // </div>
//     </>

//     )
// }
export default Almuerzo;