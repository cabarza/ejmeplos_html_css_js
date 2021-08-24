import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Select } from "reactstrap";
import Swal from 'sweetalert2';
import DesplegarValores from "./DesplegarValores";

// Este ejemplo es sin useReducer, solo useState 

const initialState = {
    nombre: '',
    direccion: '',
    email: '',
    sexo: '',
    check: true
}


const Formulario2 =()=> {
    const [inputs, setInputs] = useState(initialState);
    const [lista, setLista] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    
    const actualizarValores = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        setMostrar(false);
    }


    const procesarFormulario = (e) => {
        e.preventDefault();
        // Swal.fire('Datos Formulario', inputs.nombre + ', '+ inputs.direccion + ', ' + inputs.email, 'info');
        setLista([
            ...lista,
            inputs
        ]);
        setInputs(initialState);
        setMostrar(false);
    }

    return(
        <>
            <Form onSubmit={procesarFormulario}>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="nombre" value={inputs.nombre} onChange={actualizarValores}/>
                </FormGroup>
                <FormGroup>
                    <Label>Dirección</Label>
                    <Input type="text" name="direccion" value={inputs.direccion} onChange={actualizarValores}/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" value={inputs.email} onChange={actualizarValores}/>
                </FormGroup>
                <FormGroup>
                    <Label>Sexo</Label>
                    <Input type="select" name="sexo" value={inputs.sexo} onChange={actualizarValores}>
                        <option value="">Seleccione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" name="check" checked={inputs.check} onChange={e => setInputs({
                        ...inputs,
                        [e.target.name]: e.target.checked
                    })}/>{' '}
                    Check me out
                    </Label>
                </FormGroup>

                <Button type="submit" className="mt-4 mb-4">Guardar</Button>
            </Form>
            {mostrar && 
                <div>
                    <p>Nombre: {inputs.nombre}</p>
                    <p>Dirección: {inputs.direccion}</p>
                    <p>Email: {inputs.email}</p>
                </div>
            }

            <DesplegarValores lista={lista} setLista={setLista}></DesplegarValores>
        </>
    )
} 

export default Formulario2;