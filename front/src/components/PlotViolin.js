import React, {Component} from 'react'
import Plot from 'react-plotly.js'

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

class MediasView extends Component {
    constructor(props){
        super(props);
        this.state = {
            notas: [],
            disciplina: props.disciplina,
            discList: ['CÁLCULO I', 'CÁLCULO II', 'CÁLCULO III'],
            disciplinasOrdem: []
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
        return(
            <div className="App-center">
                <Plot
                    data={[
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
                        },
                        {
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
                            fillcolor: 'rgb(102,166,30)',
                            opacity: 0.6,
                            meanline: {
                                visible: true
                            },
                            showlegend: false
                        },
                        {
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
                        },
                    ]}
                    layout={
                        {
                            width: 820,
                            height: 640,
                            title: '',
                            yaxis: {zeroline: false}
                        }
                    }
                />
            </div>
        )
    }
}

export default MediasView;