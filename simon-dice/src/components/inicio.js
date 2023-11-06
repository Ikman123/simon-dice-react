import './styles.css';
import React, { useState } from 'react';

function Inicio() {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleGuardarClick = () => {
        setSavedName(name);
    };

    return (
        <>
            <div className='cont-nombre'>
                <form>
                    <label>Ingresa tu nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <button onClick={handleGuardarClick}>Guardar</button>
                </form>
            </div>
            <button className='iniciar'>INICIAR JUEGO</button>
            {savedName && <p>Tu nombre guardado: {savedName}</p>}
        </>
    );
}

export default Inicio;
