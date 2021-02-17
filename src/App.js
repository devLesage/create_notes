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

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas})
    console.log("deletar");
  }
  render(){  
    return(
      <section className="conteudo">
      <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
      <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
