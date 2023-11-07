import React, { useState, useEffect } from 'react';
import './styles.css';
import RegistroNombre from './inicio'; // Importa el nuevo componente

function JuegoSecuencia() {
  const [secuencia, setSecuencia] = useState([]);
  const [intento, setIntento] = useState(0);
  const [colorBoton, setColorBoton] = useState(null);
  const [nombre, setNombre] = useState('');
  const [aciertos, setAciertos] = useState(0); // Nuevo estado para aciertos

  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  const iniciarJuego = () => {
    const nuevoNumero = generarNumeroAleatorio();
    setSecuencia((prevSecuencia) => [...prevSecuencia, nuevoNumero]);
    setIntento(0);
    mostrarNumeroAleatorio(nuevoNumero);
  };

  const reiniciarJuego = () => {
    setSecuencia([]);
    iniciarJuego();
  };

  const mostrarNumeroAleatorio = (numero) => {
    setColorBoton(null);
    setTimeout(() => {
      setColorBoton(numero);
      setTimeout(() => {
        setColorBoton(null);
      }, 2000);
    }, 0);
  };

  const presionarBoton = (numero) => {
    if (numero === secuencia[intento]) {
      if (intento === secuencia.length - 1) {
        iniciarJuego();
        setAciertos(aciertos + 1); // Incrementa los aciertos
      } else {
        setIntento(intento + 1);
      }
    } else {
      reiniciarJuego();
    }
  };

  const handleRegistroNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  useEffect(() => {
    iniciarJuego();
  }, []);

  return (
    <>
      <RegistroNombre onRegister={handleRegistroNombre} />
      <h3>Nombre: {nombre}</h3>
      <h3>Aciertos: {aciertos}</h3>
      <div className="grilla">
        <button className={`red ${colorBoton === 1 ? 'bright' : ''}`} onClick={() => presionarBoton(1)}></button>
        <button className={`blue ${colorBoton === 2 ? 'bright' : ''}`} onClick={() => presionarBoton(2)}></button>
        <button className={`green ${colorBoton === 3 ? 'bright' : ''}`} onClick={() => presionarBoton(3)}></button>
        <button className={`yellow ${colorBoton === 4 ? 'bright' : ''}`} onClick={() => presionarBoton(4)}></button>
      </div>
      <button onClick={() => reiniciarJuego()}>Reiniciar</button>
    </>
  );
}

export default JuegoSecuencia;
