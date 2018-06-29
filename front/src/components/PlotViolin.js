import React, {Component} from 'react'
import Plot from 'react-plotly.js'

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

class PlotViolin extends Component {
    constructor(props){
        super(props);
        this.state = {
            notas: [],
            discList: props.discList,
            disciplinasOrdem: [],
            title: props.title
        };
    }

    componentDidMount() {
        this.state.discList.map((content) => {
            fetch('http://127.0.0.1:8000/api/notas/?disciplina='+content)
                .then(results => {
                    return results.json();
                }).then(data => {
                var aux = this.state.notas;
                aux.push(data["Notas"]);

                var ordem = this.state.disciplinasOrdem;
                ordem.push(content);

                this.setState({
                    notas: aux,
                    disciplinasOrdem: ordem
                });
            });
        });
    }

    render(){
        // let variavel = this.state.discList.map((disciplina) => {});

        return(
            <div className="App-center">
                <Plot
                    data={[
                        // {variavel}
                        {
                            type: 'violin',
                            y: this.state.notas[0],
                            x0: this.state.disciplinasOrdem[0],
                            points: 'none',
                            box: {
                                visible: true
                            },
                            boxpoints: false,
                            line: {
                                color: 'black'
                            },
                            fillcolor: '#f50057',
                            opacity: 0.7,
                            meanline: {
                                visible: true
                            },
                            showlegend: false
                        },{
                            type: 'violin',
                            y: this.state.notas[1],
                            x0: this.state.disciplinasOrdem[1],
                            points: 'none',
                            box: {
                                visible: true
                            },
                            boxpoints: false,
                            line: {
                                color: 'black'
                            },
                            fillcolor: 'blue',
                            opacity: 0.7,
                            meanline: {
                                visible: true
                            },
                            showlegend: false
                        },{
                            type: 'violin',
                            y: this.state.notas[2],
                            x0: this.state.disciplinasOrdem[2],
                            points: 'none',
                            box: {
                                visible: true
                            },
                            boxpoints: false,
                            line: {
                                color: 'black'
                            },
                            fillcolor: 'rgb(230,171,2)',
                            opacity: 0.6,
                            meanline: {
                                visible: true
                            },
                            showlegend: false
                        },{
                            type: 'violin',
                            y: this.state.notas[3],
                            x0: this.state.disciplinasOrdem[3],
                            points: 'none',
                            box: {
                                visible: true
                            },
                            boxpoints: false,
                            line: {
                                color: 'black'
                            },
                            fillcolor: 'green',
                            opacity: 0.7,
                            meanline: {
                                visible: true
                            },
                            showlegend: false
                        },{
                            type: 'violin',
                            y: this.state.notas[4],
                            x0: this.state.disciplinasOrdem[4],
                            points: 'none',
                            box: {
                                visible: true
                            },
                            boxpoints: false,
                            line: {
                                color: 'black'
                            },
                            fillcolor: 'gray',
                            opacity: 0.7,
                            meanline: {
                                visible: true
                            },
                            showlegend: false
                        },
                    ]}
                    layout={
                        {
                            width: 820,
                            height: 640,
                            title: this.state.title,
                            yaxis: {zeroline: false},
                            margin: {t:50, r:110, l: 20,b:130}
                        }
                    }
                />
            </div>
        )
    }
}

export default PlotViolin;