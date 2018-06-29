import React, {Component} from 'react'
import PlotViolin from './PlotViolin'

class MediasView extends Component {
    constructor(){
        super();
        this.state = { //Problema parecido com a das coordenadas
            lista: [
                ["PRÉ-CÁLCULO", "CÁLCULO I", "QUÍMICA GERAL", "VETORES E GEOMETRIA ANALÍTICA"],//4
                ["CÁLCULO II", "ÁLGEBRA LINEAR", "PROBABILMediasViewIDADE E ESTATÍSTICA",
                    "INTRODUÇÃO À FÍSICA CLÁSSICA I", "LÓGICA DE PROGRAMAÇÃO"],//5
                ["CÁLCULO III", "INTRODUÇÃO À FÍSICA CLÁSSICA II", "LINGUAGEM DE PROGRAMAÇÃO"],//3
                ["INTRODUÇÃO À FÍSICA CLÁSSICA III", "COMPUTAÇÃO NUMÉRICA",
                    "CIÊNCIA E TECNOLOGIA DOS MATERIAIS", "MECÂNICA DOS FLUIDOS", "MECÂNICA DOS SÓLIDOS"]//5
            ]
        }
    }

    render(){
        return(
            <div className="App-center">
                <PlotViolin discList={this.state.lista[0]} title="1º Período"/>
                <PlotViolin discList={this.state.lista[1]} title="2º Período"/>
                <PlotViolin discList={this.state.lista[2]} title="3º Período"/>
                <PlotViolin discList={this.state.lista[3]} title="4º Período"/>
            </div>
        )
    }
}

export default MediasView;