import {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/context';

const initialState = {
    nombre: '',
    apellido: '',
    email: ''
}
const initialErrors = {
    nombreError: 'Este campo es requerido',
    apellidoError: 'Este campo es requerido',
    emailError: ''
}

const Formulario = (props) => {

    const context = useContext(UserContext);
    const [inputs, setInputs] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    let { name: nombre } = useParams();

    useEffect(() => {
        console.log('NOMBRE', nombre);
        if(nombre) {
            setInputs({
                ...inputs, 
                'nombre': nombre
            })
        } else {
            setInputs(initialState);
        }
    }, [nombre])

    const updateFormInputs = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        // Validaciones
        if(name === 'nombre'){
            if(value.length < 2 || value.length>20) {
                setErrors({
                    ...errors,
                    'nombreError': 'Campo Nombre inválido'
                });
            } else {
                setErrors({
                    ...errors,
                    'nombreError': ''
                });
            }
        } else if(name === 'apellido'){
            if(value.length < 5 || value.length > 30) {
                setErrors({
                    ...errors,
                    'apellidoError': 'Campo Apellido inválido'
                });
            } else {
                setErrors({
                    ...errors,
                    'apellidoError': ''
                });
            }
        } else if(name === 'email') {
            const patron = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if(value && !value.match(patron)) {
                setErrors({
                    ...errors,
                    'emailError': 'Campo Email inválido'
                });
            } else {
                setErrors({
                    ...errors,
                    'emailError': ''
                });
            }
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(errors.nombreError || errors.apellidoError || errors.emailError) {
            return;
        }
        context.setUsuario(inputs);
    } 

    return(
        <form onSubmit={submitForm}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={inputs.nombre} onChange={updateFormInputs}/>
                {
                    errors.nombreError && <span style={{color: 'red'}}>{errors.nombreError}</span>
                }
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellido" value={inputs.apellido} onChange={updateFormInputs}/>
                {
                    errors.apellidoError && <span style={{color: 'red'}}>{errors.apellidoError}</span>
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={inputs.email} onChange={updateFormInputs}/>
                {
                    errors.emailError && <span style={{color: 'red'}}>{errors.emailError}</span>
                }
            </div>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario;