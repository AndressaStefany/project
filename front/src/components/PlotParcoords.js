import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class PlotParcoords extends Component {
    constructor(props){
        super(props);
        this.state = {
            range: [0,10],
            eixos: props.disciplinas,
            dimensao: [],
            variavel: [],
            data: [],
            layout: {width: 900, height: 640, title: 'Coordenadas Paralelas', type: 'parcoords'}
        }
    }

    componentDidMount(){
        var lista = (this.state.eixos).toString();
        console.log(lista);
        fetch('http://127.0.0.1:8000/api/parCoord/?lista='+lista)
            .then(results => {
                return results.json();
            }).then(data => {
            data['dimensions'].map((content) => {
                var string = '{"range": [0,10], "label": "'+content["label"]+'","values": ['+content['valor']+']}';
                var aux = this.state.data;
                aux.push(JSON.parse(string));
                for (var i=0; i < content['valor'].length; i++) {
                    parseFloat(content['valor'][i]);
                    this.state.variavel.push(parseFloat(content['valor'][i]));
                }
                this.setState({
                    data: aux
                });
            });

            this.setState({
                dimensao: data['dimensions'],
            });
        })
    }

    render(){
        return(
            <div className="App-center">
                <Plot data={[
                    {
                        type: 'parcoords',
                        line: {
                            showscale: true,
                            reversescale: true,
                            colorscale: 'Jet',
                            cmin: 0,
                            cmax: 10,
                            color: this.state.variavel
                        },
                        dimensions: this.state.data
                    }]}
                      layout={this.state.layout}
                />
                {/*<Plot*/}
                    {/*data={[*/}
                        {/*{type: 'parcoords',*/}
                            {/*// vizualização: ordem das linhas de baixo pra cima,*/}
                            {/*// x: this.state.disciplinas,*/}
                            {/*// y: this.state.disciplinas,*/}
                            {/*// z: this.state.valor*/}
                            {/*line: {*/}
                                {/*color: 'blue'*/}
                            {/*},*/}
                            {/*dimensions: [{*/}
                                {/*range: [0, 10],*/}
                                {/*constraintrange: [1, 2],*/}
                                {/*label: 'A',*/}
                                {/*values: [1,4]*/}
                            {/*}, {*/}
                                {/*range: [1,5],*/}
                                {/*label: 'B',*/}
                                {/*values: [3,1.5],*/}
                                {/*tickvals: [1.5,3,4.5]*/}
                            {/*}, {*/}
                                {/*range: [1, 5],*/}
                                {/*label: 'C',*/}
                                {/*values: [2,4],*/}
                                {/*tickvals: [1,2,4,5],*/}
                                {/*ticktext: ['text 1','text 2','text 4','text 5']*/}
                            {/*}, {*/}
                                {/*range: [1, 5],*/}
                                {/*label: 'D',*/}
                                {/*values: [4,2]*/}
                            {/*}],*/}
                        {/*},*/}
                    {/*]}*/}
                    {/*layout={ {width: 800, height: 540, title: 'Coordenadas Paralelas'} }*/}
                {/*/>*/}
            </div>
        )
    }
}

export default PlotParcoords;