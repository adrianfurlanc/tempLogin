
import React, { useState } from 'react';
import Boton from '../../components/Boton/Boton';
import axios from 'axios';

const Login = () => {

    // Hooks
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [msgError, setMensajeError] = useState('');

    // Handlers
    const updateCredentials = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logueame = async () => {



        let body = {
            email: credentials.email,
            password: credentials.password,
        }

        // let res = await axios.post('http://localhost:3001/dentist/login', body);
        let res = await axios.get('http://localhost:3001/dentist', {
            headers: {
                'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI3ODMyYWNiZDIzZjJhMmY1MmVlYTYiLCJ0b2tlbkNyZWF0aW9uRGF0ZSI6IjIwMjEtMDYtMDlUMTE6NDQ6MTEuMTY4WiIsImlhdCI6MTYyMzIzOTA1MX0.hLaKyeaqzXF3DPDS5JzOY2VUZIhCS2NaYeJBLFKDK8Q`
            }
        })

        console.log(res);
    }



    return (
        <div className="vistaHome">

            <div className="loginCard">
                <input type="email" name="email" onChange={updateCredentials} title=""></input>
                <input type="password" name="password" onChange={updateCredentials} title=""></input>
                <div className="sendButton" onClick={() => logueame()}>Login</div>
            </div>

            <div>{msgError}</div>

            <div className="nav">
                <Boton destino="Home" path="/" />
                <Boton destino="Register" path="/register" />
            </div>
        </div>
    )
}

export default Login;
