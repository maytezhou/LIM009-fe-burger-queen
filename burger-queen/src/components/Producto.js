import React from 'react';
import Contador from './Contador'

const Producto = ({producto, precio}) => (
    <tr>
        <td>
            <Contador/>
        </td>
            <td>{producto}</td>
            <td>${precio}</td>
            <td><button>x</button></td>
    </tr>
)
export default Producto;