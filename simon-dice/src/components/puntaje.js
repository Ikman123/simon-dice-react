import './styles.css';
import React, {useState } from 'react';

function    Puntaje() {
    const [puntaje, setPuntaje] = useState();
    return (
    <>
        <div className='contenedor-puntaje'>
            <h3>Este es tu puntaje:</h3>
            <br></br>
            <h3>Los mejores puntajes son:</h3>
        </div>
    </>
    );
}

export default Puntaje;
