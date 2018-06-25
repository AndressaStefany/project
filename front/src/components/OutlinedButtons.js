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
            id:props.codigo,
            nome:props.disciplina,
            preid:props.prerequisito,
            estilo: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    handleClick(){
        if(this.state.estilo=='') { // selecionado
            this.setState({
                estilo: 'Button-materias-select'
            });
            this.props.changeCorrelacao(this.state.nome);
        }
    }

    onMouseEnter() {
        var array = (this.state.preid).split(',');
        array.map((prerequisito) => {
            //console.log(prerequisito);
        })
    }

    render(){
        return (
            <div>
                <Button id={this.state.teste}
                        name={this.state.nome}
                        className={this.state.estilo}
                        variant="outlined"
                        color="secondary"
                        onClick={this.handleClick}
                        onMouseEnter={this.onMouseEnter}
                        style={styles.padding}>
                    {this.state.nome}
                </Button>
            </div>
        );
    }
}

export default OutlinedButtons;