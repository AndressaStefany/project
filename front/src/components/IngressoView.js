import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class IngressoView extends Component {
    state = {
        ingressantes: [],
        desistentes: [],
        concluintes: []
    };

    componentDidMount(){

        fetch('http://127.0.0.1:8000/api/qntDiscentes/?status=ingressantes')
            .then(results => {
                return results.json();
            }).then(data => {
            var status = [];
            data.results.map((array) => {
                status.push(array['quantidade']);
            });
            this.setState({
                ingressantes: status
            });
        });
        fetch('http://127.0.0.1:8000/api/qntDiscentes/?status=desistentes')
            .then(results => {
                return results.json();
            }).then(data => {
            var status = [];
            data.results.map((array) => {
                status.push(array['quantidade']);
            });
            this.setState({
                desistentes: status
            });
        });
        fetch('http://127.0.0.1:8000/api/qntDiscentes/?status=concluintes')
            .then(results => {
                return results.json();
            }).then(data => {
            var status = [];
            data.results.map((array) => {
                status.push(array['quantidade']);
            });
            this.setState({
                concluintes: status
            });
        });
    }

    render(){
        return(
            <div className="App-center">
                <Plot
                    data={[
                        {
                            type: 'scatter',
                            mode: 'lines+markers',
                            name: 'Ingressantes',
                            text: ['2009.2','2010.1','2010.2','2011.1','2011.2','2012.1','2012.2','2013.1','2013.2',
                                '2014.1','2014.2','2015.1','2015.2','2016.1','2016.2','2017.1','2017.2'],
                            x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
                            y: this.state.ingressantes,
                        },
                        {
                            type: 'scatter',
                            mode: 'lines+markers',
                            name: 'Desistentes',
                            text: ['2009.2','2010.1','2010.2','2011.1','2011.2','2012.1','2012.2','2013.1','2013.2',
                                '2014.1','2014.2','2015.1','2015.2','2016.1','2016.2','2017.1','2017.2'],
                            x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
                            y: this.state.desistentes,
                        },
                        {
                            type: 'scatter',
                            mode: 'lines+markers',
                            name: 'Concluintes',
                            text: ['2009.2','2010.1','2010.2','2011.1','2011.2','2012.1','2012.2','2013.1','2013.2',
                                '2014.1','2014.2','2015.1','2015.2','2016.1','2016.2','2017.1','2017.2'],
                            x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
                            y: this.state.concluintes,
                        }
                    ]}
                    layout={ {
                        width: 720,
                        height: 640,
                        title: 'Ingresso Vs. Evasão',
                        titlefont: {color:'black', family: 'Open Sans, sans-serif', size: '25'},
                        xaxis: {
                            title: 'Ano e Período',
                            titlefont: {size:18},
                            showgrid: true,
                            nticks: 0,
                            ticks: 0,
                            showticklabels: true,
                        },
                        yaxis: {
                            title: 'Quantidade',
                            titlefont: {size:18},
                            showgrid: true,
                            nticks: 0,
                            ticks: 0,
                            showticklabels: true,
                        },
                        paper_bgcolor: "white",
                        plot_bgcolor: "white",
                        hovermode: 'x',
                        dragmode: "zoom",
                        barmode: "group",
                        boxmode: "overlay",
                        hidesources: false
                    } }
                />
            </div>
        )
    }
}

export default IngressoView;