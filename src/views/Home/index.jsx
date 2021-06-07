import React from 'react'
import {
  Link
} from "react-router-dom";
import ArtistCard from './../../components/ArtistCard';
import './styles.scss'
import { Button, List } from '@material-ui/core';

const Home = () => {
    const artistsMock = [
        {
            name: 'Name sorbenodsofaj',
            price: 35,
            twitter: '@twitter',
            instagram: '@instagram',
            category: 'Soccer',
            categorySecondary: null,
        },
        {
            name: 'Name2 sorbenodsofaj2',
            price: 22,
            twitter: '@twitter2',
            instagram: '@instagram2',
            category: 'Soccer2',
            categorySecondary: null,
        },
        {
            name: 'Name sorbenodsofaj3',
            price: 333,
            twitter: '@twitter3',
            instagram: '@instagram3',
            category: 'Soccer',
            categorySecondary: null,
        }
    ]
    return (
        <div className="home">
            <span className="title">SALVE!</span>
            <div className="cardsGrid">
                {artistsMock.map(artist =>
                    <ArtistCard artist={artist} />
                )}
            </div>
        </div>
    )
}
export default Home;