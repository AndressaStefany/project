import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class PlotHeatmap extends Component {
    constructor(props){
        super(props);
        this.state = {
            disciplinas: props.disciplinas,
            valor: [],
            title: props.title,
            width: props.width,
            height: props.height

        }
    }

    componentDidMount(){
        var lista = (this.state.disciplinas).toString();

        fetch('http://127.0.0.1:8000/api/correlacao/?lista='+lista)
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
                    layout={ {width: 720, height: 640, title: 'Correlação'} }
                />
            </div>
        )
    }
}

export default PlotHeatmap;