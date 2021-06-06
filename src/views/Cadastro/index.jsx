import React from 'react'

import './styles.scss'

import { Button, TextField } from '@material-ui/core';

export default function Cadastro() {
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
                        <TextField  irequired className="form-field" label="Telefone" variant="outlined" margin="normal" type="number"/>
                    </div>
                    <div>
                        <TextField required className="form-field" label="Endereço" variant="outlined" margin="normal"/>
                    </div>
                    <div className="form-field-container double-field-container">
                        <TextField  required className="double-field" style={{marginRight: 15}}label="Cidade" variant="outlined" margin="normal"/>
                        <TextField  required className="double-field" label="Bairro" variant="outlined" margin="normal"/>
                    </div>
                    <div>
                        <Button className="submit-button" variant="outlined" type="submit">Registrar</Button>
                    </div>
                </form>
                <div id="login-div">
                    <p>Já possui uma conta?</p>
                    <Button to="/login" variant="outlined" >Login</Button>
                </div>
            </div>
    )
}
