import './App.css';
import Inicio from './components/inicio';
import Puntaje from './components/puntaje';
import JuegoSecuencia from './components/botones';

function App() {
  return (
    <>
      <div className='centrar'>
        <JuegoSecuencia />
        <Puntaje />
      </div>
      
    </>
  );
}

export default App;
