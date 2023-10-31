import './App.css';
import Botones from './components/botones';
import Inicio from './components/inicio';

function App() {
  return (
    <>
      <Inicio />
      <div className='centrar'>
        <Botones />
      </div>
      
    </>
  );
}

export default App;
