import React from 'react'

import './styles.scss'

import { Button } from '@material-ui/core';

const Home = () => {
        return (
            <div className="home">
                <h1>Salve!</h1>
                <p>Conecte-se com seu ídolo favorito!</p>
                <div className="buttons">
                    <Button className="home-button" variant="outlined">Entrar</Button>
                    <Button className="home-button" variant="outlined">Cadastrar</Button>
                </div>
            </div>
        )
}

export default Home;