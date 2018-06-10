import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class Data extends Component {
    constructor(){
        super();
        this.state = {
            notas: [],
            posicao: []
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/discente/')
            .then(results => {
                return results.json();
            }).then(data => {
            console.log(data);
            var cont = 0;
            var pos = []
            let notas = data.results.map((pic)=>{
                cont +=1;
                pos.push(cont);
                return pic.nota
            });

            this.setState({
                notas: notas,
                posicao: pos
            });
        })
    }

    render(){
        return(
            <div>
                <Plot
                    data={[
                        {type: 'bar', x: this.state.posicao, y: this.state.notas},
                    ]}
                    layout={ {width: 620, height: 540, title: 'Notas'} }
                />
            </div>
        )
    }
}

export default Data;