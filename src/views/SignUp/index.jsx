import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './styles.scss'

import { Button, TextField } from '@material-ui/core';

const SignUp = () => {
    return (
        <div className="cadastro">
            <h1>Salve!</h1>
            <p className="description">Preencha o formulário abaixo para se cadastrar</p>
            <form id="form-cadastro">
                <div>
                    <TextField  required className="form-field" label="Nome" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField  required className="form-field" label="E-mail" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField  required className="form-field" label="Senha" type="password" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField  required className="form-field" label="Telefone" variant="outlined" margin="normal" type="number"/>
                </div>
                <div><Link to="/public"></Link>
                    <Button className="submit-button" variant="outlined" type="submit"><Link to="/">Registrar</Link></Button>
                </div>
            </form>
            <div id="login-div">
                <p>Já possui uma conta?</p>
                <Button to="/login" variant="outlined" >Login</Button>
            </div>
        </div>
    )
}
export default SignUp;