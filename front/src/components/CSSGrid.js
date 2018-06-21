import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OutlinedButtons from './OutlinedButtons';

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
            periodo4: []
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=1')
            .then(results => {
                return results.json();
            }).then(data => {
            data.results.map((array) => {
                var newArray = this.state.periodo1;
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
                this.setState({
                    periodo1: newArray
                });
            });
        });
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=2')
            .then(results => {
                return results.json();
            }).then(data => {
            data.results.map((array) => {
                var newArray = this.state.periodo2;
                    newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
                this.setState({
                    periodo2: newArray
                });
            });
        });
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=3')
            .then(results => {
                return results.json();
            }).then(data => {
            data.results.map((array) => {
                var newArray = this.state.periodo3;
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
                this.setState({
                    periodo3: newArray
                });
            });
        });
        fetch('http://127.0.0.1:8000/api/disciplinas/?periodo=4')
            .then(results => {
                return results.json();
            }).then(data => {
            data.results.map((array) => {
                var newArray = this.state.periodo4;
                newArray.push([array['codigo'], array['nome'], array['pre_requisito']]);
                this.setState({
                    periodo4: newArray
                });
            });
        });
    }

    render(){
        return (
            <div>
                <Typography variant="subheading" gutterBottom>
                    <h1>Bacharelado em Ciências e Tecnologia</h1>
                    <br/>
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">1º período</p>
                            {this.state.periodo1.map((linha)=>
                                <OutlinedButtons id={linha[0]} name={linha[1]} preid={linha[3]}/>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">2º período</p>
                            {this.state.periodo2.map((linha)=>
                                <OutlinedButtons id={linha[0]} name={linha[1]} preid={linha[3]}/>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">3º período</p>
                            {this.state.periodo3.map((linha)=>
                                <OutlinedButtons id={linha[0]} name={linha[1]} preid={linha[3]}/>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">4º período</p>
                            {this.state.periodo4.map((linha)=>
                                <OutlinedButtons id={linha[0]} name={linha[1]} preid={linha[3]}/>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CSSGrid;