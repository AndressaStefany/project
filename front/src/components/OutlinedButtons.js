import React,{Component} from 'react';
import Button from '@material-ui/core/Button';

class OutlinedButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {title:props.name};
    }
    render(){
        return (
            <div>
                <Button variant="outlined" color="secondary">
                    {this.state.title}
                </Button>
            </div>
        );
    }
}

export default OutlinedButtons;