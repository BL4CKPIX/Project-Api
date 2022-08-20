import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=a993799d52868d24bfa8c0b887e82f95&language=pt-BR&page=1'
})

export default class Movie extends Component {

    state = {
        movies: [],
        FilterMovies: []
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const Resposta = await FilmesApi.get()
        console.log(Resposta)

        const AllFilmes = Resposta.data.results.map((item) => {
            return {
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        console.log(AllFilmes)
        this.setState({
            movies: AllFilmes,
            FilterMovies: AllFilmes
        })
    }

    handleChange = (event) => {
        const ListaFiltrada = this.state.movies.filter((item) =>{
            if(item.original_title.toLowerCase().includes(event.target.value.toLowerCase())){
                return true
            }else{
                return ""
            }
        })
        this.setState({
            FilterMovies:ListaFiltrada
        })
    }

    render() {
        return (
            <>
            <input onChange={this.handleChange}/>
                <ul>
                    {this.state.FilterMovies.map((item, index) => (
                        <div>
                        <ul key={index}>
                            <li>{item.original_title}</li>
                            <li>{item.overview}</li>
                            <li>{item.vote_average}</li>
                        </ul>
                        <img src={item.image} />
                        </div>
                    ))}
                </ul>
            </>
        )
    }
}