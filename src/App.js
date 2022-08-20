import React, {Component} from 'react'
import Header from './Component/Header.js'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color:#FF7F50;
  }

`

export default class App extends Component{

  render(){
    return(
      <div>
        <GlobalStyle />
        <Header />
      </div>
    )
  }
}



