import React, {Component} from "react";
import "./style.css";
class FormularioCadastro extends Component{
    constructor(props){
        super(props);
       
    }
    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
        evento.stopPropagation();
        console.log(this.titulo);
    }

    _handleMudancaTexto(evento){
        this.texto = evento.target.value;
        evento.stopPropagation();

    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        if(!this.titulo){
            alert("Insira o título");
        }else if(!this.texto){
            alert("Insira o texto");
        }else{
            this.props.criarNota(this.titulo, this.texto);
        }     
    }
    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input type="text" placeholder="Titulo" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
                <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}/>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;