import React, { useState, useEffect } from 'react';
import './styles.css';
import RegistroNombre from './inicio';

function JuegoSecuencia() {
  const [seq, setSeq] = useState([]);
  const [intent, setIntent] = useState(0);
  const [btnColor, setBtnColor] = useState(null);
  const [name, setName] = useState('');

  const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

  const startGame = () => {
    const newNum = getRandomNumber();
    console.log("fum")
    setSeq([...seq, newNum]);
    setIntent(0);
    
  };

  const showRandomNumber = (index = 0) => {
    if (index < seq.length) {
      setBtnColor(null);
      setBtnColor(seq[index]);
      setTimeout(() => {
        setBtnColor(null);
        showRandomNumber(index + 1);
      }, 1000);
    }
  };
  

  const pressButton = (num) => {
    if (num === seq[intent]) {
      if (intent === seq.length - 1) {
        startGame();
      } else {
        setIntent(intent + 1);
      }
    } else {
      alert("¡Perdiste!");
      resetGame();
    }
  };

  const handleRegisterName = (newName) => setName(newName);

  const resetGame = () => setSeq([]);

  useEffect(() => {
    if (seq.length === 0) {
      startGame();
    } else{
      showRandomNumber();
      console.log(seq);
    }
  }, [seq]);

  const getBtnStyle = (buttonNumber) => ` ${btnColor === buttonNumber ? 'bright' : ''}`;

  return (
    <>
      <RegistroNombre onRegister={handleRegisterName} />
      <h3>Nombre: {name}</h3>
      <div className="grilla">
        <button className={`red ${getBtnStyle(1)}`} onClick={() => pressButton(1)}></button>
        <button className={`blue ${getBtnStyle(2)}`} onClick={() => pressButton(2)}></button>
        <button className={`green ${getBtnStyle(3)}`} onClick={() => pressButton(3)}></button>
        <button className={`yellow ${getBtnStyle(4)}`} onClick={() => pressButton(4)}></button>
      </div>
      <button onClick={resetGame}>Reiniciar</button>
    </>
  );
}

export default JuegoSecuencia;
