import React,{Component} from 'react';
import Button from '@material-ui/core/Button';

const styles = {
    padding : {
        marginBottom: '4%'
    }
};

class OutlinedButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:props.name,
            id:props.id,
            preId:props.preid
        };
    }
    render(){
        return (
            <div>
                <Button variant="outlined" color="secondary" style={styles.padding}>
                    {this.state.title}
                </Button>
            </div>
        );
    }
}

export default OutlinedButtons;