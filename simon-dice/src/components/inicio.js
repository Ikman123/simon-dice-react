import React, { useState } from 'react';

function RegistroNombre({ onRegister }) {
    const [nombre, setNombre] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(nombre);
    };

    return (
        <div>
        <h2>Registrar Nombre</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Nombre:
            <input type="text" value={nombre} onChange={handleNombreChange} />
            </label>
            <button type="submit">Registrar</button>
        </form>
        </div>
    );
}

export default RegistroNombre;
