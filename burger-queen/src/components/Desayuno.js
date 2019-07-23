import React, {useState} from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase';
import Producto from './Producto';
import Pedido from './Pedido';

const Desayuno = () => {
    const [precio, setPrecio] = useState(0);
    const [producto, setProducto] = useState('');
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
                <span>
                {value.docs.map(ele => (
                    ele.data().menuType === 'desayuno' &&(
                    <div key={ele.data().id}>
                        {ele.data().name} ${ele.data().price} <button onClick={() => {setPrecio(ele.data().price); setProducto(ele.data().name);}}>
                        Agregar 
                        </button>
                    
                    </div>
                ))
                )}
                 
                </span>
          )}
      </div>
    );
  };


export default Desayuno;