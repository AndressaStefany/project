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
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/notas/?disciplina='+this.state.disciplina)
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({
                notas: data["Notas"]
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
                            y: this.state.notas,
                            points: 'none',
                            box: {
                                visible: true
                            },
                            boxpoints: false,
                            line: {
                                color: 'black'
                            },
                            fillcolor: '#8dd3c7',
                            opacity: 0.6,
                            meanline: {
                                visible: true
                            },
                            x0: this.state.disciplina
                        },
                    ]}
                    layout={
                        {
                            width: 420,
                            height: 340,
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