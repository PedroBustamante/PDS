import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './styles.scss'

import { Button, TextField } from '@material-ui/core';

export default function index() {
    return (
        <div className="login">
            <h1>Servi</h1>
            <form id="form-login">
                <div>
                    <TextField required className="form-field" label="E-mail" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField required className="form-field"  type="password" label="Senha" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <Button className="submit-button" variant="outlined"><Link to="/search">Login</Link></Button>
                </div>
            </form>
            <div id="register-div">
                <p>Ainda não possui uma conta?</p>
                <Button variant="outlined"><Link to="/signup">Cadastrar</Link></Button>
            </div>
        </div>
    )
}
