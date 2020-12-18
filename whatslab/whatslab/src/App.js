import React from "react";
import sltyled from "styled-components"

const Container = sltyled.div`
  border: 1px solid lightblue;
  background-color:lightblue;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
`;

const Botao = sltyled.button`
  height: 30px;
  width: 60px;
  background-color:  gray;
  color: white;
  display: flex;
  align-items: center;
`;
const Caixa = sltyled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`
const ImputeM = sltyled.div`
  display: flex;
  
`
const Nome = sltyled.input`
  width: 100px;
  padding: 5px;
  
  
`
const Mensagem = sltyled.input`
  flex-grow: 1;
  
  padding: 5px;

`



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
      
      <Caixa>
      
      <ImputeM>
      <Nome
            
      value = {this.state.valorInputUsuario} 
      onChange={this.onChangeInputUsuario}
      placeholder = {"Usuário"}
      />

      <Mensagem  
      value = {this.state.valorInputMensagem} 
      onChange={this.onChangeInputMensagem} 
      placeholder = {"Mensagem"} />

     
  

      <Botao onClick={this.adicionaComent}>Enviar</Botao>
      </ImputeM>
      </Caixa>
      
      <div>{postCompleto}</div>
      
    </Container>
  )
}
}






