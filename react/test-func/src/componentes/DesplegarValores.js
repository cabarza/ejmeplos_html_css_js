import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const DesplegarValores = ({lista, setLista}) => {

    const eliminar = (e, indice) => {
        Swal.fire({
            title: 'Eliminar fila',
            text: '¿Está seguro que desea eliminar la fila?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!!',
            confirmButtonColor: 'red'
        }).then(respuesta => {
            console.log(respuesta);
            if(respuesta.value) {
                setLista(lista.filter((e, i) => i !== indice))
            }
        })
    }

    return (
        <table style={{width:'100%'}}>
            <thead>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Email</th>
                <th>Sexo</th>
                <th>Check</th>
                <th>Acción</th>
            </thead>
            <tbody>
                {lista.map((e, i)=> 
                    <tr key={i}>
                        <td>{e.nombre}</td>
                        <td>{e.direccion}</td>
                        <td>{e.email}</td>
                        <td>{e.sexo}</td>
                        <td>{e.check?'Seleccionado': 'Deseleccionado'}</td>
                        <td>
                            {
                                i%2==0 && <FontAwesomeIcon color="red" icon={faTrash} onClick={e => eliminar(e, i)}/>
                            }
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default DesplegarValores;