import React, {useState} from 'react';
import '../css/logIn.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'
 

function LogIn(props) {
    const [alert, setAlert] = useState(false)
    const [data, setData] = useState({
        name : '',
        password : '',
    })
    const alertComponent = <Alert variant='danger'>coucou la mifa</Alert>

    function login(obj) {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/login',
        data: {
            name : obj.name,
            password : obj.password,
        }
    })
    .then(r => {
        console.log(r.data)
        if(r.data.status === true) {
            return setAlert(true)
        }
    })
    .catch(e => console.log(e))
}

    
    return (
        <div className='container'>
        <div className='alertContainer'>{alert && alertComponent}</div>
        <div className='logContainer'>

            <Form>

            <Form.Group controlId="formBasicText">
                <Form.Label>Nom : </Form.Label>
                <Form.Control type="text" placeholder="Enter nom" value={data.name || ''} onChange={val => setData({...data, name: val.target.value})} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Password" value={data.password || ''} onChange={val => setData({...data, password: val.target.value})}/>
            </Form.Group>
            <Button variant="primary" onClick={() => login(data)}>
                Connexion
            </Button>
            </Form>

        </div>
        </div>
    );
}



export default LogIn;