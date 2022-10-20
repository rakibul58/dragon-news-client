import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Routes/contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email , password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error))

        console.log(name , photoURL , email , password);
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">
                
            </Form.Text>
        </Form>
    );
};

export default Register;