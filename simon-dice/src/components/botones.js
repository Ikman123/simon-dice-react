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
    setSeq(prevSeq => [...prevSeq, newNum]);
    setIntent(0);
    showRandomNumber(newNum);
    console.log(seq);
  };

  const showRandomNumber = (num) => {
    setBtnColor(null);
    setBtnColor(num);
    setTimeout(() => setBtnColor(null), 2000);
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
    }
  }, [seq]);

  const getBtnStyle = (buttonNumber) => ` ${btnColor === buttonNumber ? 'bright' : ''}`;

  return (
    <>
      <button onClick={() => console.log(seq)}>PROBA</button>
      <RegistroNombre onRegister={handleRegisterName} />
      <h3>Nombre: {name}</h3>
      <div className="grilla">
        <button className={`red${getBtnStyle(1)}`} onClick={() => pressButton(1)}></button>
        <button className={`blue${getBtnStyle(2)}`} onClick={() => pressButton(2)}></button>
        <button className={`green${getBtnStyle(3)}`} onClick={() => pressButton(3)}></button>
        <button className={`yellow${getBtnStyle(4)}`} onClick={() => pressButton(4)}></button>
      </div>
      <button onClick={resetGame}>Reiniciar</button>
    </>
  );
}

export default JuegoSecuencia;
