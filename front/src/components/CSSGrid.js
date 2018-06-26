import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OutlinedButtons from './OutlinedButtons';
import PlotHeatmap from "./PlotHeatmap";
import Button from '@material-ui/core/Button';

const styles = {
    paper64: {
        padding: '8px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        marginBottom: '8px',
        color: 'rgba(0, 0, 0, 0.54)',
    }
};

class CSSGrid extends Component{
    constructor(){
        super();
        this.state = {
            periodo1: [],
            periodo2: [],
            periodo3: [],
            periodo4: [],
            correlacao: [],
            plotCorrelacao: false
        };
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=1')
            .then(results => {
                return results.json();
            }).then(data => {
            var newArray = this.state.periodo1;
            data.results.map((array) => {
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
            });
            this.setState({
                periodo1: newArray
            });
        });
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=2')
            .then(results => {
                return results.json();
            }).then(data => {
            var newArray = this.state.periodo2;
            data.results.map((array) => {
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
            });
            this.setState({
                periodo2: newArray
            });
        });
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=3')
            .then(results => {
                return results.json();
            }).then(data => {
            var newArray = this.state.periodo3;
            data.results.map((array) => {
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
            });
            this.setState({
                periodo3: newArray
            });
        });
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=4')
            .then(results => {
                return results.json();
            }).then(data => {
            var newArray = this.state.periodo4;
            data.results.map((array) => {
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
            });
            this.setState({
                periodo4: newArray
            });
        });
    }

    // Função chamada pelo callbackParent();
    onChangeCorrelacao(dataFromChild){
        var aux = this.state.correlacao;
        aux.push(dataFromChild);
        this.setState({ correlacao: aux});
    };

    changePlotCorrelacao(){
        this.setState({
            plotCorrelacao:true,
        });
    }

    cancela(){ // cancela as operações
        this.setState({
            correlacao: [],
            plotCorrelacao: false
        });
    }

    render(){
        return (
            <div>
                <Typography variant="subheading" gutterBottom>
                    <h2>Bacharelado em Ciências e Tecnologia</h2>
                    <br/>
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">1º período</p>
                            {this.state.periodo1.map((linha)=>
                                <OutlinedButtons
                                    changeCorrelacao={this.onChangeCorrelacao.bind(this)}
                                    codigo={linha[0]}
                                    disciplina={linha[1]}
                                    prerequisito={linha[2]}
                                />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">2º período</p>
                            {this.state.periodo2.map((linha)=>
                                <OutlinedButtons
                                    changeCorrelacao={this.onChangeCorrelacao.bind(this)}
                                    codigo={linha[0]}
                                    disciplina={linha[1]}
                                    prerequisito={linha[2]}
                                />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">3º período</p>
                            {this.state.periodo3.map((linha)=>
                                <OutlinedButtons
                                    changeCorrelacao={this.onChangeCorrelacao.bind(this)}
                                    codigo={linha[0]}
                                    disciplina={linha[1]}
                                    prerequisito={linha[2]}
                                />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">4º período</p>
                            {this.state.periodo4.map((linha)=>
                                <OutlinedButtons
                                    changeCorrelacao={this.onChangeCorrelacao.bind(this)}
                                    codigo={linha[0]}
                                    disciplina={linha[1]}
                                    prerequisito={linha[2]}
                                />
                            )}
                        </Paper>
                    </Grid>
                </Grid>
                <Button
                    onClick={this.changePlotCorrelacao.bind(this)}
                    color="default"
                    variant="flat"
                >
                    Correlação
                </Button>

                <Button
                    onClick={this.cancela.bind(this)}
                    color="default"
                    variant="flat"
                >
                    Cancelar
                </Button>

                {/*Mostra matriz de correlação*/}
                {this.state.plotCorrelacao && <PlotHeatmap disciplinas={this.state.correlacao}/>}
            </div>
        );
    }
}

export default CSSGrid;