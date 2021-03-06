import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const initialState = {
    firstName: '',
    lastName:'', 
    email:'',
    password:'',
    confirmPassword:''
}

const RegisterForm = () => {

    const [newUser, setNewUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const hist = useHistory();

    const updateFormValue = (e) => {
        const {name, value} = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ''
        })
    }

    const register =(e) => {
        e.preventDefault();
        axios.post('/api/registry', newUser)
            .then(resp => {
                setNewUser(initialState);
                Swal.fire('User Register', 'The user was successfully registered', 'success');
            }).catch(err => {
                for(let field in err.response.data.errors) {
                    setErrors({
                        ...errors,
                        [field]: err.response.data.errors[field].message
                    });
                }
            });
        
    } 

    return (
        <>
            <h1>Register</h1>
            <Form onSubmit={register}>
                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input type="tex" name="firstName" value={newUser.firstName} onChange={updateFormValue} required/>
                            {errors.firstName && <span style={{color: 'red'}}>{errors.firstName}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input type="tex" name="lastName" value={newUser.lastName} onChange={updateFormValue} required/>
                            {errors.lastName && <span style={{color: 'red'}}>{errors.lastName}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" value={newUser.email} onChange={updateFormValue} required/>
                            {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" value={newUser.password} onChange={updateFormValue} required/>
                            {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" value={newUser.confirmPassword} onChange={updateFormValue} required/>
                            {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} className="mt-3">
                        <Button type="submit">Register</Button>
                        <Button type="button" onClick={e => hist.push("/")} style={{marginLeft: '10px'}}>Back</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default RegisterForm;