import React from 'react';
const Simple = ({ precio1,precio2,precio3}) => {
  
     
    return (
      <>
        <div > Solo simple ${precio1}
        <button>Agregar </button>
        </div>
        <div>Huevo + ${precio2}
        <button>Agregar</button>
        </div>
        <div>Queso + ${precio3}
        <button>Agregar</button>
        </div>
      </>
    );
  };
  export default Simple;