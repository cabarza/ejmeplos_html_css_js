import react, {useState} from 'react';
import '../estilos/estilo.css';

const Hijo = (props) => {

    const { datos, num, setNum } = props;

    const estilo = {
        border: '3px solid red'
    }


    const aumentar = (e) => {
        setNum(num+1);
    } 

    return (
        <div className="hijo" style={estilo}>
            <h1>Componente Hijo</h1>

            <h3>El valor ingresado en el componente padre es: {props.valor.texto}</h3>

            <h3>El valor que se esta ingresado es: {props.valor.input}</h3>

            <h3>El número es: { num }</h3>

            <button type="button" onClick={aumentar}>Aumentar</button>


            <table>
                <thead>
                    <th>Codigo</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                    {
                        datos.map((o, i) => <tr key={i}>
                                <td>{o.codigo}</td>
                                <td>{o.valor}</td>
                            </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Hijo;