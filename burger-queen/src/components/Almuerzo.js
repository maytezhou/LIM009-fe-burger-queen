import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase';
import Adicional from './Adicional';



const Almuerzo = () => {
    const [tipo, setTipo] = useState('');
    const [simple, setSimple] = useState(null);
    const [doble, setDoble] = useState(null);
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
                                    <button type="button" className="btn btn-success" onClick={() =>{setSimple(doc.data().type)}}>Simple ${doc.data().type.simple.solo}</button>
                                    {simple &&(
                                    <>
                                    <Adicional precio1={doc.data().type.simple.solo} precio2={doc.data().type.simple.huevo} precio3={doc.data().type.simple.queso}/>
                                    </>
                                    )}
                                </div>
                                <div>    
                                    <button type="button" className="btn btn-success" onClick={() =>{setDoble(doc.data().type)}}>Doble ${doc.data().type.doble.solo}</button>
                                    {doble &&(
                                    <>
                                    <Adicional precio1={doc.data().type.doble.solo} precio2={doc.data().type.doble.huevo} precio3={doc.data().type.doble.queso}/>
                                    
                                    </>
                                    )}
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
