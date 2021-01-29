import React, {useState} from 'react';
import '../css/logIn.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap'


function LogIn(props) {
    const [alert, setAlert] = useState(false)

    const alertComponent = <Alert variant='danger'>Nom ou Mot de passe incorrect !</Alert>

    return (
        <div className='container'>

        <div className='alertContainer'>{alert && alertComponent}</div>

        <div className='logContainer'>

            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nom : </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => setAlert(true)}>
                Connexion
            </Button>
            </Form>

        </div>
        </div>
    );
}

export default LogIn;