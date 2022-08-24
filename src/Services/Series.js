import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Imagens = styled.img`
    width:15vw;
    border-radius: 10%;
    box-shadow: 5px 5px 5px firebrick;
`
const Filtro = styled.input`
    border-radius: 5%;
    width:15vw;
    height: 5vh;
    font-size:1.5vw;
    border: none;

    ::placeholder{
        text-align: center;
    }
`
const Container = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    padding: 10px;

    li{
        list-style: none;
        padding:15px;
    }
`
const H2 = styled.h2`
    font-style:bold
`

const ContainerPai = styled.div`
    display:flex;
    flex-wrap: wrap;
    text-align:center;
    align-items: center;
    padding: 30px;
    
`
const FiltroDiv = styled.div`
    width:90%;
    height: 10vh;
    display:flex;
    justify-content: end;
    align-items: center;
`

const Section = styled.section`
    font-family: 'Orbitron', sans-serif;
`

const ApiSeries = axios.create({
    baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=a993799d52868d24bfa8c0b887e82f95&language=pt-BR&page=1'
})

export default class Series extends Component{

    state={
        series:[],
        FilterSeries:[]
    }

    componentDidMount(){
        this.getSeries()
    }

    getSeries = async () =>{
        const Resposta = await ApiSeries.get()

        const AllSeries = Resposta.data.results.map((item) => {
            return {
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        console.log(AllSeries)
        this.setState({
            series: AllSeries,
            FilterSeries: AllSeries
        })
    }

    handleChange = (event) => {
        const ListaFiltrada = this.state.series.filter((item) =>{
            if(item.original_name.toLowerCase().includes(event.target.value.toLowerCase())){
                return true
            }else{
                return ""
            }
        })
        this.setState({
            FilterSeries:ListaFiltrada
        })
    }

    render(){
        return(
            <Section>
                <FiltroDiv>
                    <Filtro placeholder='Digite sua Serie' onChange={this.handleChange}/>
                </FiltroDiv>
                <ContainerPai>
                    {this.state.FilterSeries.map((item, index) => (
                        <Container>
                            <Imagens src={item.image}/>
                            <ul key={index}>
                                <H2>{item.name}</H2>
                                <li>{item.overview}</li>
                                <li>NOTA: {item.vote_average}</li>
                            </ul>
                        </Container>
                    ))}
                </ContainerPai>
            </Section>
        )
    }
}