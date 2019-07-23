import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase';

const Bebidas = () => {
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
                      ele.data().menuType === 'bebidas' &&(
                      <div key={ele.data().id}>
                          {ele.data().name} ${ele.data().price} <button>Agregar </button>
                      </div>
                  ))
                  )}
                  </span>
            )}
        </div>
      );
}
export default Bebidas;