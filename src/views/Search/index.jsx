import React from 'react'
import {
    Link
} from "react-router-dom";

import BottomMenu from '../../components/BottomMenu';

import './styles.scss'

import { Button, TextField, CardHeader, Avatar, Card } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

const Search = () => {
    const artistsMock = [
        {
            name: 'Faustão',
            price: 35,
            twitter: '@twitter',
            instagram: '@instagram',
            category: 'Televisão',
            categorySecondary: null,
        },
        {
            name: 'Ronaldinho Gaúcho',
            price: 22,
            twitter: '@twitter2',
            instagram: '@instagram2',
            category: 'Esportes',
            categorySecondary: null,
        },
        {
            name: 'Zeca Pagodinho',
            price: 22,
            twitter: '@twitter2',
            instagram: '@instagram2',
            category: 'Música',
            categorySecondary: null,
        },
        {
            name: 'brTT',
            price: 333,
            twitter: '@twitter3',
            instagram: '@instagram3',
            category: 'LoL',
            categorySecondary: 'Trapper',
        },
        {
            name: 'Neymar',
            price: 22,
            twitter: '@twitter2',
            instagram: '@instagram2',
            category: 'Esportes',
            categorySecondary: null,
        },
        {
            name: 'Ronaldinho Gaúcho',
            price: 22,
            twitter: '@twitter2',
            instagram: '@instagram2',
            category: 'Esportes',
            categorySecondary: null,
        }
    ]

    const categoriesMock = [
        {
            name: 'Televisão',
        },
        {
            name: 'Música',
        },
        {
            name: 'Esportes',
        }
    ]

    const [categories, setCategories] = React.useState(categoriesMock);
    const [artists, setArtists] = React.useState(artistsMock);
    const [search, setSearch] = React.useState("");

    function checkCategories() {
        if (Object.keys(categories).length === 0) {
            return (<p>Nenhuma categoria por aqui =(</p>)
        } else {
            return (<Carousel className="categories">
                        {categories.map(category => (
                            <Card variant="outlined" className="category-card">
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            style={{backgroundColor: "rgb(" + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + ")"}}
                                        >
                                            {category.imagem ? <img src={category.imagem} alt={category.name[0]}></img> : category.name[0]}
                                        </Avatar>
                                    }
                                    title={category.name}
                                />
                            </Card>
                        ))}
                    </Carousel>)
        }
    }

    function checkArtists() {
        if (Object.keys(artists).length === 0) {
            return (<p>Nenhum Artista por aqui =(</p>)
        } else {
            return (artists.map(artist => (
                        <Card variant="outlined" className="artist-card">
                            <CardHeader
                                avatar={
                                    <Avatar
                                        style={{backgroundColor: "rgb(" + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + ")"}}
                                    >
                                        {artist.imagem ? <img src={artist.imagem} alt={artist.name[0]}></img> : artist.name[0]}
                                    </Avatar>
                                }
                                title={artist.name}
                                titleTypographyProps={{variant:'h6'}}
                                subheader={<div className="subheader">{artist.categorySecondary ? artist.category + ' | ' + artist.categorySecondary : artist.category}</div>}
                            />
                        </Card>
                    )))
        }
    }

    return (
        <div className="search">
            <section className="search-bar-container">
                <TextField id="search-bar" className="search-bar" placeholder="Buscar" variant="outlined"/>
                <Button  variant="outlined" /* onClick={() => setSearch(document.getElementById("search-bar").value)} */>Buscar</Button>
            </section>
            <section className="search-content">
                <p className="section-name" >Categorias</p>
                {checkCategories()}
                <p className="section-name" >Artistas</p>
                {checkArtists()}
            </section>
            <BottomMenu/>
        </div>
    )
}
export default Search;