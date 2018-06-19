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
            this.setState({dimensao: data['dimensions']});
            console.log(this.state.dimensao);
        })
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
                            <OutlinedButtons name="Teste1"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">2º período</p>
                            <OutlinedButtons name="Teste2"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">3º período</p>
                            <OutlinedButtons name="Teste3"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.paper64}>
                            <p className="App-center">4º período</p>
                            <OutlinedButtons name="Teste4   "/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CSSGrid;