import { useState } from 'react';
import Anidado from './components/anidado/Anidado';
import Agregar from './components/arreglos/Agregar';
import Listado from './components/arreglos/Listado';
import HolaMundo from './components/hola-mundo/HolaMundo';

function App() {

  // const [titulo, setTitulo] = useState('Valor Inicial');
  const [arreglo, setArreglo] = useState([]);

  return (
    <>
      <Agregar setArreglo={setArreglo} arreglo={arreglo}></Agregar>
      <Listado arreglo={arreglo}></Listado>

      {/* <HolaMundo titulo={titulo} setTitulo={setTitulo}></HolaMundo>
      <Anidado texto={titulo}>
        <ul>
          <li>Opt 1</li>
          <li>Opt 2</li>
          <li>Opt 3</li>
        </ul>
        <span>Texto hijo</span>
        <h2>Otra texto mas</h2>
      </Anidado> */}
    </>
  );
}

export default App;
