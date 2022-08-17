import React, {Component} from 'react'
import Header from './Component/Header.js'

export default class App extends Component{
  
  // state={
  //   nome: 'David'
  // }

  // componentDidMount(){
  //   document.title = this.state.nome
  // }
  // componentDidUpdate(state){
  //   if(state !== this.state.nome){
  //     document.title = this.state.nome
  //   }
  // }
  // mudar = () =>{
  //   this.setState({
  //     nome: this.state.nome == "leonardo" ? "david" : "leonardo",
  //     corpo: document.body.style.backgroundColor = "red"
  //   })
  // }

  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}


