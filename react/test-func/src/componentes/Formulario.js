import { useReducer } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// Este ejemplo es con useReducer

const initialState = {
    nombre: '',
    direccion: '',
    email: ''       
}
const reducer = (inputs, action) => {
    return {
        ...inputs,
        [action.type]: action.payload
    }
}

const Formulario = () => {
    const [inputs, dispatch] = useReducer(reducer, initialState);

    const actualizarValores = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }


    const procesarFormulario = (e) => {
        e.preventDefault();
        alert(inputs.nombre + ', '+ inputs.direccion + ', ' + inputs.email);
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

                <Button type="submit">Guardar</Button>
            </Form>

        </>
    )
} 

export default Formulario;