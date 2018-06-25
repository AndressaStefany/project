import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class Plot_heatmap extends Component {
    constructor(props){
        super(props);
        this.state = {
            disciplinas: props.disciplinas,
            valor: []
        }
    }

    componentDidMount(){
        var lista = '';
        (this.state.disciplinas).map((disc) => {
            lista +=','+disc;
        });
        lista = lista.substr(1,lista.length);

        console.log('lista '+lista);

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
                    layout={ {width: 620, height: 540, title: 'Correlação'} }
                />
            </div>
        )
    }
}

export default Plot_heatmap;