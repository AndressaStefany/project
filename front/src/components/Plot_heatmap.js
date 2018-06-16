import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class Plot_heatmap extends Component {
    constructor(){
        super();
        this.state = {
            disciplinas: ['CÁLCULO I', 'CÁLCULO II', 'CÁLCULO III'],
            valor: []
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/correlacao/?lista=CÁLCULO I,CÁLCULO II,CÁLCULO III')
            .then(results => {
                return results.json();
            }).then(data => {
            var disc = "";
            let corr = data.results.map((item)=>{
                var linha = [];
                for(var i=0; i<(this.state.disciplinas).length; i++){
                    disc = this.state.disciplinas[i];
                    linha.push(100*item[disc]);
                }
                return linha;
            });

            this.setState({
                valor: corr
            });
        })
    }

    render(){
        return(
            <div>
                <Plot
                    data={[
                        {type: 'heatmap',
                            // vizualização: ordem das linhas de baixo pra cima,
                            x: this.state.disciplinas,
                            y: this.state.disciplinas,
                            z: this.state.valor}
                    ]}
                    layout={ {width: 620, height: 540, title: 'Correlação'} }
                />
            </div>
        )
    }
}

export default Plot_heatmap;