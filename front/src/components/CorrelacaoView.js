import React, {Component} from 'react';
import PlotHeatmap from "./PlotHeatmap";

class CorrelacaoView extends Component {
    constructor(){
        super();
        this.state = {
            correlacao: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=0')
            .then(results => {
                return results.json();
            }).then(data => {
            var aux = this.state.correlacao;
            for(var i=0; i<data.results.length; i++){
                aux.push(data.results[i]);
            }
            this.setState({correlacao: aux});
        });

    }

    render(){
        return(
            <div className="App-center">
                <PlotHeatmap disciplinas={this.state.correlacao}/>
            </div>
        )
    }
}

export default CorrelacaoView;