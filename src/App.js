import React, {Component} from "react";

export default class App extends Component{

    state = {

        aluno:{
            nome: "Helio",
            idade: 34,
            comida:"Pão com ovo"
        }
    }

  render(){
        return(
            <div>
                
                <h1>{this.state.aluno[0].nome}</h1>
                <h2>{this.state.aluno[0].idade}</h2>
                <h3>{this.state.aluno[0].comida}</h3>

                <ul className='lista'>
                <li>Nego Drama</li>
                <li>Smile</li>
                </ul>

                <ol className='lista1'>
                <li>Nego Drama</li>
                <li>Smile</li>
                </ol>

            </div>
        )
    }
}