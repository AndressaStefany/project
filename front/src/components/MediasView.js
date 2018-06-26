import React, {Component} from 'react'
import PlotViolin from './PlotViolin'

class MediasView extends Component {
    constructor(){
        super();
        this.state = { //Problema parecido com a das coordenadas
            lista: [
                ["PRÉ-CÁLCULO", "CÁLCULO I", "QUÍMICA GERAL", "VETORES E GEOMETRIA ANALÍTICA"],
                ["CÁLCULO II", "ÁLGEBRA LINEAR", "PROBABILIDADE E ESTATÍSTICA",
                    "INTRODUÇÃO À FÍSICA CLÁSSICA I", "LÓGICA DE PROGRAMAÇÃO"],
                ["CÁLCULO III", "INTRODUÇÃO À FÍSICA CLÁSSICA II", "LINGUAGEM DE PROGRAMAÇÃO"],
                ["INTRODUÇÃO À FÍSICA CLÁSSICA III", "COMPUTAÇÃO NUMÉRICA",
                    "CIÊNCIA E TECNOLOGIA DOS MATERIAIS", "MECÂNICA DOS FLUIDOS", "MECÂNICA DOS SÓLIDOS"]
            ]
        }
    }

    render(){
        return(
            <div className="App-center">
                <PlotViolin discList={this.state.lista[0]}/>
                <PlotViolin discList={this.state.lista[1]}/>
                <PlotViolin discList={this.state.lista[2]}/>
                <PlotViolin discList={this.state.lista[3]}/>
            </div>
        )
    }
}

export default MediasView;