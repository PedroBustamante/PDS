import React from 'react'
import {
    Link
} from "react-router-dom";

import BottomMenu from '../../components/BottomMenu';

import './styles.scss'

import { Button, Avatar } from '@material-ui/core';

export default function ArtistPage() {
    const artistMock = {
        name: 'Ronaldinho Gaúcho',
        price: 35,
        twitter: '@twitter',
        instagram: '@instagram',
        category: 'Esportes',
        categorySecondary: 'Música',
    }

    return (
        <div className="artist-page">
            <Avatar className="avatar" style={{backgroundColor: "purple"}}>{artistMock.name[0]}</Avatar>
            <div className="name">{artistMock.name}</div>
            <div className="data">
                <h4>Twitter</h4>
                <p>{artistMock.twitter}</p>
            </div>
            <div className="data">
                <h4>Instagram</h4>
                <p>{artistMock.instagram}</p>
            </div>
            <div className="data">
                <h4>Preço do Salve!</h4>
                <p>R$ {artistMock.price}</p>
            </div>
            <div className="data">
                <h4>Categorias</h4>
                <p>{artistMock.categorySecondary ? artistMock.category + " | " + artistMock.categorySecondary : artistMock.category}</p>
            </div>
            <div>
                <Button variant="outlined" className="salve">
                    Pedir um Salve!
                </Button>
            </div>
            <BottomMenu/>
        </div>
    )
}
