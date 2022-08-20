import React, { Component } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Movies from '../Services/Movies.js'
import Series from '../Services/Series.js'
import Home from '../Services/Home.js'
import styled from 'styled-components'
import Photo from '../Img/SóAlegriaFlix.png'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    border:solid;
    
    ul{
        display:flex;
        justify-content: space-around;
        width:100%;
        border:solid;
    }

    li{
        font-size: 1.5vw;
        width:20vw
    }
`

const Foto = styled.img`
    width:20vw;
`

export default class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <nav>
                        <ul>
                            <li><Link to='/'><Foto src={Photo} /></Link></li>
                            <li><Link to='/Movies'>Movies</Link></li>
                            <li><Link to='/Series'>Series</Link></li>
                        </ul>
                    </nav>
                </Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Movies' element={<Movies />} />
                    <Route path='/Series' element={<Series />} />
                </Routes>
                
            </BrowserRouter>
        )
    }
}