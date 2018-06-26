import React, {Component} from 'react';
import PlotHeatmap from "./PlotHeatmap";

class CorrelacaoView extends Component {
    constructor(){
        super();
        this.state = {
            correlacao: ["PRÉ-CÁLCULO", "CÁLCULO I", "QUÍMICA GERAL", "VETORES E GEOMETRIA ANALÍTICA", "CÁLCULO II",
                "ÁLGEBRA LINEAR", "PROBABILIDADE E ESTATÍSTICA", "INTRODUÇÃO À FÍSICA CLÁSSICA I", "LÓGICA DE PROGRAMAÇÃO",
                "CÁLCULO III", "INTRODUÇÃO À FÍSICA CLÁSSICA II", "LINGUAGEM DE PROGRAMAÇÃO", "INTRODUÇÃO À FÍSICA CLÁSSICA III",
                "COMPUTAÇÃO NUMÉRICA", "CIÊNCIA E TECNOLOGIA DOS MATERIAIS", "MECÂNICA DOS FLUIDOS", "MECÂNICA DOS SÓLIDOS"],
        };
    }

    render(){
        return(
            <div className="App-center">
                <PlotHeatmap disciplinas={this.state.correlacao} title="Correlação com Todas as Matérias"
                            width={720} height={640}/>
            </div>
        )
    }
}

export default CorrelacaoView;