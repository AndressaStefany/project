import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class PlotParcoords extends Component {
    constructor(){
        super();
        this.state = {
            range: [0,10],
            eixos: ['CÁLCULO I', 'CÁLCULO II', 'CÁLCULO III'],
            valor: [[3, 5, 3], [8,6,10], [3.5, 10, 8.9]],
            // range, constraintrange, label, values
            dimensao: [],
            variavel: [],
            data: [],
            layout: {width: 800, height: 540, title: 'Coordenadas Paralelas'}
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/parCoord/?lista=CÁLCULO I,CÁLCULO II,CÁLCULO III')
            .then(results => {
                return results.json();
            }).then(data => {
            data['dimensions'].map((content) => {
                var string = '{"range": [0,10], "label": ["'+content["label"]+'"],"values": ['+content['valor']+']}';
                var aux = this.state.data;
                aux.push(JSON.parse(string));
                this.setState({
                    data: aux,
                });
            });

            this.setState({
                dimensao: data['dimensions'],
            });
        })
    }



    render(){
        return(
            <div>
                <Plot data={[this.state.dimensao]}
                      layout={this.state.layout}
                />
            </div>
        )
    }
}

export default PlotParcoords;