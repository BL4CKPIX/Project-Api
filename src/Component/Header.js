import React, {Component} from 'react'
import { BrowserRouter, Link , Routes, Route } from 'react-router-dom'
import Movies from '../Services/Movies.js'
import Series from '../Services/Series.js'
import Home from '../Services/Home.js'

export default class Header extends Component{
    render(){
        return(
            <BrowserRouter>
                <h1>BatataFlix</h1>
                <nav>
                    <ul>
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/Movies'>Movies</Link></li>
                        <li><Link to='/Series'>Series</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path ='/' element= {<Home />} />
                    <Route path = '/Movies' element= {<Movies />} />
                    <Route path = '/Series' element= {<Series />} />
                </Routes>
            </BrowserRouter>
        )
    }
}