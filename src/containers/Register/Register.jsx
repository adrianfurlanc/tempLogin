import React from 'react';
import Boton from "../../components/Boton/Boton";
import './Register.css'

const Register = () => {
    return (
        <div className="vistaHome">
            <Boton destino="Home" path="/"/>
            <Boton destino="Login" path="/login"/>
        </div>
    )
}

export default Register;
