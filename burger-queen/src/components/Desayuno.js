import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase'




const Desayuno = () => {
    const [value, loading, error] = useCollection(
      app.firestore().collection('productos2'),
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
                    <>
                    <div>
                        {ele.data().americano.name} ${ele.data().americano.price}
                    </div>
                    <div>
                        {ele.data().leche.name} ${ele.data().leche.price}
                    </div>
                    <div>
                        {ele.data().sandwich.name} ${ele.data().sandwich.price}
                    </div>
                    <div>
                        {ele.data().jugo.name} ${ele.data().jugo.price}
                    </div>
                    </>
                )
                )}
                </span>
          )}
      </div>
    );
  };


export default Desayuno;