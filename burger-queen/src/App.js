import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Cliente from './components/Cliente'
import Menu from './components/Menu';
import { useCollection } from 'react-firebase-hooks/firestore';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB93E5cHt5g2-qmsEfE3TEQVBsFN0JlMBA",
  authDomain: "burgerquen-531da.firebaseapp.com",
  databaseURL: "https://burgerquen-531da.firebaseio.com",
  projectId: "burgerquen-531da",
  storageBucket: "",
  messagingSenderId: "572245733543",
  appId: "1:572245733543:web:156e6d86332bd170"
};

var app = firebase.initializeApp(firebaseConfig);

const FirestoreCollection = () => {
  const [value, loading, error] = useCollection(
    app.firestore().collection('almuerzoYcena'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map(doc => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};


function App() {
  return (
    <div>
      <Nav/>
      <Cliente/>
      <Menu/>
      <FirestoreCollection/>
    </div>
  )
}
export default App;

