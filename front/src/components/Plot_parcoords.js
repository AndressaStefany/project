import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class Plot_parcoords extends Component {
    constructor(){
        super();
        this.state = {
            range: [0,10],
            eixos: ['CÁLCULO I', 'CÁLCULO II', 'CÁLCULO III'],
            valor: [[3, 5, 3], [8,6,10], [3.5, 10, 8.9]],
            // range, constraintrange, label, values
            dimensao: []
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/discente/')
            .then(results => {
                return results.json();
            }).then(data => {
            console.log(data);

            // this.setState({
            // });
        })
    }



    render(){
        return(
            <div>
                <Plot data={[
                    {type: 'parcoords',
                        line: {
                            color: 'blue'
                        },
                        dimensions: [{
                            range: this.state.range,
                            // constraintrange: [3, 6],
                            label: this.state.eixos[0],
                            values: this.state.valor[0]
                        }, {
                            range: this.state.range,
                            label: this.state.eixos[1],
                            values: this.state.valor[1],
                            // tickvals: [1.5,3,4.5]
                        }, {
                            range: this.state.range,
                            label: this.state.eixos[2],
                            values: this.state.valor[2],
                        }, {
                            range: this.state.range,
                            label: 'D',
                            values: [4,2,5]
                        }],
                    },
                ]}
                      layout={ {width: 800, height: 540, title: 'Coordenadas Paralelas'} }
                />
            </div>
        )
    }
}

export default Plot_parcoords;