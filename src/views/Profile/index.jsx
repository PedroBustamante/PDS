import React from 'react'
import {
    Link
} from "react-router-dom";
import BottomMenu from '../../components/BottomMenu';
import './styles.scss';
import { Button, Avatar } from '@material-ui/core';

export default function Profile() {
    const userMock = {
        name: "Joaquim Joesley",
        email: "jojo@gmail.com",
        phone: "99999999"
    }

    return (
        <div className="profile">
            <Avatar className="avatar" style={{backgroundColor: "purple"}}>{userMock.name[0]}</Avatar>
            <div className="name">{userMock.name}</div>
            <div className="data">
                <h4>E-mail</h4>
                <p>{userMock.email}</p>
            </div>
            <div className="data">
                <h4>Telefone</h4>
                <p>{userMock.phone}</p>
            </div>
            <div>
                <Button role="logoutButton" variant="outlined" className="logout">
                    <Link to="/">Sair</Link>
                </Button>
            </div>
            <BottomMenu/>
        </div>
    )
}
