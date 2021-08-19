import react, {useEffect, useRef, useState} from 'react';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import Hijo from './Hijo'
import styles from './Padre.module.css';

const Padre = (props) =>{

    const [estado, setEstado] = useState({
        texto:'',
        input: ''
    });

    const [num, setNum] = useState(10);

    const [datos, setDatos] = useState([]);


    const actualizarValor = (e) => {
        e.preventDefault();
        setEstado({ 
            ...estado,
            texto: estado.input
        })
    }

    const actualizarInput = (e) => {
        setEstado({
            ...estado,
            input: e.target.value
        })
    }


    useEffect(() => {
        setEstado({
            texto: 'TEXTO',
            input: 'Valor por Defecto'
        });

        setDatos([
            ...datos,
            { codigo: `COD${num}`, valor: `VALOR ${num}` }
        ])
    }, [num]);


    return (
        <Row className={styles.padre}>
            <Col md={6} xs={12}>
                <h1>Componente Padre</h1>
            </Col>
            <Col md={6} xs={12}>
                <Form onSubmit={actualizarValor}>
                    <Col>
                        <FormGroup>
                            <Input type="text" name="input" value={estado.input} onChange={actualizarInput}></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button type="submit">Actualziar Valor</Button>
                    </Col> 
                </Form>
            </Col>

            <Hijo valor={estado} numero={10} datos={datos} num={num} setNum={ setNum }></Hijo>
        </Row>
    )
}

export default Padre;