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
            preid:props.preid,
            active: false,
            estilo: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.estilo=='') { // selecionado
            this.setState({
                estilo: 'Button-materias-select'
            });
        } else {
            this.setState({ // não selecionado
                estilo: ''
            });
        }
    }

    handleMouseEnter(){
        // mostrar os pre requisitos
    }

    render(){
        return (
            <div>
                <Button id={this.state.id}
                        className={this.state.estilo}
                        variant="outlined"
                        color="secondary"
                        onClick={this.handleClick}
                        onMouseEnter={this.handleMouseEnter}
                        style={styles.padding}>
                    {this.state.title}
                </Button>
            </div>
        );
    }
}

export default OutlinedButtons;