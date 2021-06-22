import React from 'react'
import {
    Link
} from "react-router-dom";

import './styles.scss'

import { Search, PersonOutline } from '@material-ui/icons';

export default function BottomMenu() {
    return (
        <div className="bottom-menu">
            <div className="options">
                <Link to="/search"><div><Search />Buscar</div></Link>
                <Link to="/profile"><div><PersonOutline />Perfil</div></Link>
            </div>
        </div>
    )
}
