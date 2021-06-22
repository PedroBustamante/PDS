import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './styles.scss'

import { Button } from '@material-ui/core';

const Home = () => {
        return (
            <div className="home">
                <h1>Salve!</h1>
                <p>Conecte-se com seu ídolo favorito!</p>
                <div className="buttons">
                    <Button className="home-button" variant="outlined"><Link to="/login">Entrar</Link></Button>
                    <Button className="home-button" variant="outlined"><Link to="/signup">Cadastrar</Link></Button>
                </div>
            </div>
        )
}
export default Home;