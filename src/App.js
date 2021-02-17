import React, { Component } from "react";
import FormularioCadastro  from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import "./Assets/App.css";
import "./Assets/index.css";
class App extends Component {
  constructor(){
    super();
    
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo, texto){
    console.log(`uma nova nota foi criada `+titulo+ "" +texto);
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    
    this.setState(novoEstado)

  }
  render(){  
    return(
      <section className="conteudo">
      <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
      <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
