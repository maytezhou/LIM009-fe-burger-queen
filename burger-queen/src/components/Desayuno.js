import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../components/Firebase'




const Desayuno = () => {
    const [value, loading, error] = useCollection(
      app.firestore().collection('desayuno'),
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
              {value.docs.map(doc => (
                <div key={doc.data().id}>{doc.data().name} {doc.data().price}</div>
              ))}
            </span>
          )}
      </div>
    );
  };


// const Desayuno = () => (
//     <div>
//         <table className="table">
//             <tbody>
//                 <tr>
//                     <td>Cafe Americano</td>
//                     <td>$5</td>
//                     <td><button type="button" className="btn btn-success">Agregar</button></td>
//                 </tr>
//                 <tr>
//                     <td>Cafe con leche </td>
//                     <td>$7</td>
//                     <td><button type="button" className="btn btn-success">Agregar</button></td>
//                 </tr>
//                 <tr>
//                     <td>Sandwich jamon con queso </td>
//                     <td>$10</td>
//                     <td><button type="button" className="btn btn-success">Agregar</button></td>
//                 </tr>
//                 <tr>
//                     <td>Jugo de frutas natural </td>
//                     <td>$7</td>
//                     <td><button type="button" className="btn btn-success">Agregar</button></td>
//                 </tr>

//             </tbody>
//         </table>
//     </div>
// )
export default Desayuno;