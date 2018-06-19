import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import OutlinedButtons from './OutlinedButtons';

const styles = theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
});

function CSSGrid(props) {
    const { classes } = props;

    return (
        <div>
            <Typography variant="subheading" gutterBottom>
                <h1>Bacharelado em Ciências e Tecnologia</h1>
                <br/>
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p className="App-center">1º período</p>
                        <OutlinedButtons/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p className="App-center">2º período</p>
                        <OutlinedButtons/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p className="App-center">3º período</p>
                        <OutlinedButtons/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p className="App-center">4º período</p>
                        <OutlinedButtons/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

CSSGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);