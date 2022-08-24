import React, {Component} from 'react'
import styled from 'styled-components'
import Photo from '../Img/SóAlegriaFlix.png'

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    Flex-direction:Column;
    height:60vh;
` 

const Foto = styled.img`
    width:30vw;

`
const H1 = styled.h1`
    font-family: 'Rubik Iso', cursive;
    font-size:2.5rem;
`

export default class Home extends Component{
    render(){
        return(
            <Container>
                <H1>Seja Bem vindo ao melhor Pirata Filmes</H1>
                <Foto src={Photo} alt='sóalegriaFlix'/>
            </Container>
        )
    }
}