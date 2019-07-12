import React from 'react';

const Desayuno = () => (
    <div>
        <table class="table">
            <tbody>
                <tr>
                    <td>Cafe Americano</td>
                    <td>$5</td>
                    <td><button type="button" className="btn btn-success">Agregar</button></td>
                </tr>
                <tr>
                    <td>Cafe con leche </td>
                    <td>$7</td>
                    <td><button type="button" className="btn btn-success">Agregar</button></td>
                </tr>
                <tr>
                    <td>Sandwich jamon con queso </td>
                    <td>$10</td>
                    <td><button type="button" className="btn btn-success">Agregar</button></td>
                </tr>
                <tr>
                    <td>Jugo de frutas natural </td>
                    <td>$7</td>
                    <td><button type="button" className="btn btn-success">Agregar</button></td>
                </tr>

            </tbody>
        </table>
    </div>
)
export default Desayuno;