import { useRef, useState } from 'react';

const UseRef = () => {
    const [texto, setTexto] = useState('Texto Inicial')

    const h1Var = useRef();

    const cambiarTexto = (e) => {
        console.log('H1 VAR', h1Var); 
        h1Var.current.value = 'Otro Valor';
        h1Var.current.focus();
    }

    return(
        <>
            <div>
                <input ref={h1Var} style={{textAlign:'center'}} value={texto} onChange={e => setTexto(e.target.value)}/>

                <button type="button" onClick={cambiarTexto}>Cambiar Texto</button>

                <p>{texto}</p>
            </div>
        </>
    );
}

export default UseRef;