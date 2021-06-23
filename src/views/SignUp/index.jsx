import React from 'react';
import {
  Link
} from "react-router-dom";
import './styles.scss';
import { Button, TextField } from '@material-ui/core';

const SignUp = () => {
    return (
        <div className="cadastro">
            <h1>Salve!</h1>
            <p className="description">Preencha o formulário abaixo para se cadastrar</p>
            <form id="form-cadastro">
                <div>
                    <TextField
                        inputProps={{
                            "data-testid": "nameInput",
                        }}
                        required
                        className="form-field"
                        label="Nome"
                        variant="outlined"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        inputProps={{
                            "data-testid": "emailInput",
                        }}
                        required
                        className="form-field"
                        label="E-mail"
                        variant="outlined"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        inputProps={{
                            "data-testid": "passwordInput",
                        }}
                        required
                        className="form-field"
                        label="Senha"
                        type="password"
                        variant="outlined"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField 
                        inputProps={{
                            "data-testid": "phoneInput",
                        }}
                        required
                        className="form-field"
                        label="Telefone"
                        variant="outlined"
                        margin="normal"
                        type="number"
                    />
                </div>
                <div><Link to="/public"></Link>
                    <Button className="submit-button" variant="outlined" type="submit"><Link to="/">Cadastrar</Link></Button>
                </div>
            </form>
            <div id="login-div">
                <p>Já possui uma conta?</p>
                <Button variant="outlined" ><Link to="/login">Login</Link></Button>
            </div>
        </div>
    )
}
export default SignUp;