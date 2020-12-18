import React from "react";
import sltyled from "styled-components"



const Container = sltyled.div`
  background-: grey;
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Titulo = sltyled.h1`
  background-: grey;
  text-aling: center;
  display: flex;
`;

const Botao = sltyled.button`
  height: 30px;
  width: 100px;
  border-radius: 20px;
  background-color: grey;
  color: pink;
`;
// const Caixa = sltyled.valorInputMensagem`

// `



export default class App extends React.Component {
  state = {
    whatslab:[

      {
        usuario:"",
        mensagem: "",
        
      }

    ],    
  
      valorInputUsuario: "",
      valorInputMensagem: "",
  

  };

  adicionaComent = () => {

    const novoComent = {
    usuario: this.state.valorInputUsuario,
    mensagem: this.state.valorInputMensagem,
    
    };

    const mensagemTela = [...this.state.whatslab, novoComent];
    this.setState({whatslab: mensagemTela });
    this.setState({valorInputUsuario: ""})
    this.setState({valorInputMensagem: ""})
   };   
   

  onChangeInputUsuario = (event) =>{
    this.setState({valorInputUsuario: event.target.value});
  };
  
  onChangeInputMensagem = (event) =>{
    this.setState({valorInputMensagem: event.target.value});
  };



render() {
  const postCompleto = this.state.whatslab.map((item) =>{
    return(
      <p>
        {item.usuario} - {item.mensagem} 
      </p>
    );
  }); 

  return (
    <Container className="App">
      
      <Titulo>Whatslab</Titulo>
      
      <div>
      <input 
            
      value = {this.state.valorInputUsuario} 
      onChange={this.onChangeInputUsuario}
      placeholder = {"Usuário"}
      />

      <input 
      value = {this.state.valorInputMensagem} 
      onChange={this.onChangeInputMensagem} 
      placeholder = {"Mensagem"} />
  

      <Botao onClick={this.adicionaComent}>Enviar</Botao>
      </div>
      
      <div>{postCompleto}</div>
      
    </Container>
  )
}
}



