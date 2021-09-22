import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";
import UserContext from "../../context/UserContext";

const Login = () => {

    const history = useHistory();

    const context = useContext(UserContext);

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const updateFormValue =(e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const login =(e) => {
        e.preventDefault();
        axios.post('/api/login', inputs)
            .then(resp => {
                if(resp.data.success) {
                    context.setUser(resp.data.user);
                    sessionStorage.setItem('USER_DATA', JSON.stringify(resp.data.user));
                    history.push('/products/list');
                }
            }).catch(err => {
                Swal.fire('Login attempt', err.response.data.message, 'error');
            });
    }

    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={login}>
                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" value={inputs.email} onChange={updateFormValue} required/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" value={inputs.password} onChange={updateFormValue} required/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} className="mt-3">
                        <Button type="submit">Login</Button>
                    </Col>
                    <Col xs={12} className="mt-3">
                        <Link to="/register">Register new user</Link>
                    </Col>
                </Row>
            </Form>
        </>
    )

}

export default Login;