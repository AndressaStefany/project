import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function OutlinedButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="outlined" color="secondary" className={classes.button}>
                Pré-calculo
            </Button>
            <br/>
            <Button variant="outlined" color="secondary" className={classes.button}>
                Cálculo I
            </Button>
            <br/>
            <Button variant="outlined" color="secondary" className={classes.button}>
                Química Geral
            </Button>
        </div>
    );
}

OutlinedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);