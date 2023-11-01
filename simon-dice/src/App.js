import './App.css';
import Botones from './components/botones';
import Inicio from './components/inicio';
import Puntaje from './components/puntaje';

function App() {
  return (
    <>
      <div className='centrar'>
        <Inicio />
        <Botones />
        <Puntaje />
      </div>
      
    </>
  );
}

export default App;
