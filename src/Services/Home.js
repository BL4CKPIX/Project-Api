import React, {Component} from 'react'
import styled from 'styled-components'
import Photo from '../Img/SóAlegriaFlix.png'

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    Flex-direction:Column;
    border:solid;

` 

const Foto = styled.img`
    width:30vw;

`

export default class Home extends Component{
    render(){
        return(
            <Container>
                <h1>Seja Bem vindo ao melhor Pirata Filmes</h1>
                <Foto src={Photo} alt='sóalegriaFlix'/>
            </Container>
        )
    }
}