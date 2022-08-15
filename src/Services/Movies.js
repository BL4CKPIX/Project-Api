import React, { Component } from 'react'
import axios from 'axios'

const FilmesApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=a993799d52868d24bfa8c0b887e82f95&language=pt-BR&page=1'
})
console.log(FilmesApi)
export default class Movie extends Component {
    render() {
        return (
            <>
                
            </>
        )
    }
}