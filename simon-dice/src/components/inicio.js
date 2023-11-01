import './styles.css';

function Inicio() {
    return (
    <>
        <div className='cont-nombre'>
            <label><h3>Ingresa tu nombre:</h3></label>
            <input></input>
            <button>guardar</button>
        </div>
        <button className='iniciar'>INICIAR JUEGO</button>

    </>
    );
}

export default Inicio;
