import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase';
import Simple from '../components/Simple';



const Almuerzo = () => {
    const [tipo, setTipo] = useState('')
    const [producto, setProducto] = useState(null)
    const [adicional, setAdicional] = useState(null)
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
                <>
                {''}
                {value.docs.filter(
                    (ele) =>
                        ele.data().category === 'hamburguesa'
                        && ele.data().type === 'simple'
                        && ele
                ).map((doc)=>
                    <div key={doc.data().id}>
                            <input onClick={() => {setTipo(doc.data().name)}} type="radio" id="gridCheckRes" name='hamburguesas'/>
                            <label htmlFor="gridCheckRes">{doc.data().name}</label>
                            {tipo === doc.data().name && (
                                <>
                                <div>
                                    <button type="button" className="btn btn-success" onClick={() =>{setAdicional(doc.data().type)}}>Simple ${doc.data().price}</button>
                          
                                </div>
                                <div>    
                                    <button type="button" className="btn btn-success">Doble ${doc.data().price}</button>
                                </div>
                                <Simple/>
                                </>
                            )}
                    </div>
                )
               }
               </>
            )}
        </div>
        );
};



//<span>
                // {value.docs.filter((ele) => 
                // ele.data().category==='hamburguesa' 
                // && ele.data().type==='simple'
                // && ele).map(doc => (
                //     <div key={doc.data().id}>
                //         {doc.data().name==='Hamburguesa de res' && (
                            // <>
                            // <input onClick={() => {setTipo('res'); setProducto(doc.data())}} type="radio" id="gridCheckRes" name='hamburguesas'/>
                            // <label htmlFor="gridCheckRes">{doc.data().name ==='Hamburguesa de res' ?doc.data().name:'' }</label>
                            // </>
                //         )}
                //         {doc.data().name==='Hamburguesa de pollo' && (
                //             <>
                //             <input onClick={() => {setTipo('pollo')}} type="radio" id="gridCheckChicken" name='hamburguesas'/>
                //             <label htmlFor="gridCheckChicken">{doc.data().name ==='Hamburguesa de pollo' ?doc.data().name:'' }</label>
                //             </>
                //         )}
                //         {doc.data().name==='Hamburguesa vegetariana' && (
                //             <>
                //             <input onClick={() => {setTipo('vegetariana')}} type="radio" id="gridCheckGreen" name='hamburguesas'/>
                //             <label htmlFor="gridCheckGreen">{doc.data().name ==='Hamburguesa vegetariana' ?doc.data().name:'' }</label>
                //             </>
                //         )}
                //     </div>
                // ))
                // }
                        // <div>
                            // {tipo === 'res' && (
                            //     <div>
                            //         {value.docs.map((ele) => (
                            //             ele.data().category==='hamburguesa'
                            //             && ele.data().name==='Hamburguesa de res'
                            //             && ele.data().type==='simple'
                            //             && (
                            //                 <button type="button" className="btn btn-success" onClick={setAdicional('simple')}>Simple ${ele.data().price}</button>
                            //             )
                            //         ))}
                            //         {value.docs.map((ele)=>ele.data().category==='hamburguesa' 
                            //             && ele.data().name==='Hamburguesa de res'
                            //             && ele.data().type==='doble' 
                            //             && (   
                            //                 <button type="button" className="btn btn-success">Doble ${ele.data().price}</button>
                            //             )
                            //         )}
                            //     </div>
                            // )}
                //             {tipo === 'pollo' && (
                //                 <div>
                //                     {value.docs.map((ele)=>
                //                         ele.data().category==='hamburguesa' 
                //                         && ele.data().name==='Hamburguesa de pollo'
                //                         && ele.data().type==='simple'
                //                         && (
                //                         <button type="button" className="btn btn-primary">Simple ${ele.data().price}</button>
                //                         )
                //                     )}
                //                     {value.docs.map((ele)=>ele.data().category==='hamburguesa' 
                //                         && ele.data().name==='Hamburguesa de pollo'
                //                         && ele.data().type==='doble'
                //                         &&  (
                //                             <button type="button" className="btn btn-primary">Doble ${ele.data().price}</button>
                //                         )
                //                     )}
                //                 </div>
                //             )}
                //             {tipo === 'vegetariana' && (
                //                 <div>
                //                     {value.docs.map((ele)=>ele.data().category==='hamburguesa' 
                //                         && ele.data().name==='Hamburguesa vegetariana'
                //                         && ele.data().type==='simple'
                //                         && (
                //                             <button type="button" className="btn btn-danger">Simple ${ele.data().price}</button>
                //                         )
                //                     )}
                //                     {value.docs.map((ele)=>ele.data().category==='hamburguesa' 
                //                         && ele.data().name==='Hamburguesa vegetariana'
                //                         && ele.data().type==='doble'
                //                         && (
                //                             <button type="button" className="btn btn-danger">Doble ${ele.data().price}</button>
                //                         )
                //                     )}
                //                 </div>
                //             )}
                //         </div>
                //         <div>
                //             {adicional === 'simple' && (
                //                 <Simple precio1={producto.price}/>
                //             )}
                            
                //             {adicional === 'huevo' && (
                //                 <Simple/>
                //             )}
                //              {adicional === 'queso' && (
                //                 <Simple/>
                //             )}
                               
                           
                //         </div>
                // </span>













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