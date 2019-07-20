import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase';
import Simple from '../components/Simple';



const Almuerzo = () => {
    const [tipo, setTipo] = useState('')
    const [producto, setProducto] = useState(null)
    const [adicional, setAdicional] = useState(null)
    const [value, loading, error] = useCollection(
      app.firestore().collection('producto3'),
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
                        ele.data().menuType === 'almuerzoYcena'
                        && ele
                ).map((doc) =>
                    
                    <div key={doc.data().id}>
                            <input onClick={() => {setTipo(doc.data().name)}} type="radio" id="gridCheckRes" name='hamburguesas'/>
                            <label htmlFor="gridCheckRes">{doc.data().name}</label>
                            {tipo === doc.data().name && (
                                <>
                                <div>
                                    <button type="button" className="btn btn-success" onClick={() =>{setAdicional(doc.data().type.simple)}}>Simple ${doc.data().type.simple}</button>
                            {adicional === doc.data().type.simple &&(
                                <>
                                <div > 
                                    Solo simple ${doc.data().type.simple}
                                    <button>Agregar </button>
                                </div>
                                <div>
                                    {doc.data().category === 'adicional'
                                    && doc.data().name === 'Con huevo'
                                    && doc.data().price}
                                    <button>Agregar</button>
                                </div>
                                <div>Queso + 
                                    <button>Agregar</button>
                                </div>
                                </>
                            )}
                                </div>
                                <div>    
                                    <button type="button" className="btn btn-success">Doble ${doc.data().price}</button>
                                </div>
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


export default Almuerzo;


// const Almuerzo = () => {
//     const [tipo, setTipo] = useState('')
//     const [producto, setProducto] = useState(null)
//     const [adicional, setAdicional] = useState(null)
//     const [value, loading, error] = useCollection(
//       app.firestore().collection('productos'),
//       {
//         snapshotListenOptions: { includeMetadataChanges: true },
//       }
//     );

//     return (
//         <div>
//             {error && <strong>Error: {error}</strong>}
//             {loading && <span>Collection: Loading...</span>}
//             {value && (
//                 <>
//                 {''}
//                 {value.docs.filter(
//                     (ele) =>
//                         ele.data().menuType === 'almuerzoYcena'
//                         && ele.data().category === 'hamburguesa'
//                         && ele.data().type === 'simple'
//                         && ele
//                 ).map((doc) =>
//                     <div key={doc.data().id}>
//                             <input onClick={() => {setTipo(doc.data().name)}} type="radio" id="gridCheckRes" name='hamburguesas'/>
//                             <label htmlFor="gridCheckRes">{doc.data().name}</label>
//                             {tipo === doc.data().name && (
//                                 <>
//                                 <div>
//                                     <button type="button" className="btn btn-success" onClick={() =>{setAdicional(doc.data().type)}}>Simple ${doc.data().price}</button>
//                             {adicional === doc.data().type &&(
//                                 <>
//                                 <div > 
//                                     Solo simple ${doc.data().price}
//                                     <button>Agregar </button>
//                                 </div>
//                                 <div>
//                                     {doc.data().category === 'adicional'
//                                     && doc.data().name === 'Con huevo'
//                                     && doc.data().price}
//                                     <button>Agregar</button>
//                                 </div>
//                                 <div>Queso + 
//                                     <button>Agregar</button>
//                                 </div>
//                                 </>
//                             )}
//                                 </div>
//                                 <div>    
//                                     <button type="button" className="btn btn-success">Doble ${doc.data().price}</button>
//                                 </div>
//                                 </>
//                             )}
//                     </div>
//                 )
//                }
//                </>
//             )}
//         </div>
//         );
// };