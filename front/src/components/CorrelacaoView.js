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
            abrev: ["PRÉ-CÁLCULO", "CÁLCULO I", "QUÍMICA GERAL", "VET. E GEO. ANALÍTICA", "CÁLCULO II",
                "ÁLGEBRA LINEAR", "PROB. E ESTATÍSTICA", "INT. À FÍS. CLÁSSICA I", "LÓG. PROGRAMAÇÃO",
                "CÁLCULO III", "INT. À FÍS. CLÁSSICA II", "L. PROGRAMAÇÃO", "INT. À FÍS. CLÁSSICA III",
                "COMP. NUMÉRICA", "CIÊN. E TEC. MATERIAIS", "MEC. DOS FLUIDOS", "MEC. DOS SÓLIDOS"]
        };
    }

    render(){
        return(
            <div className="App-center">
                <PlotHeatmap disciplinas={this.state.correlacao} abreviaturas={this.state.abrev} title="Correlação com Todas as Matérias"
                            width={720} height={640}/>
            </div>
        )
    }
}

export default CorrelacaoView;