import react, {Component} from "react";

class Agregar extends Component {
    
    constructor(props) {
        super(props);
        console.log('PROPS', props);
        this.state = {
            valor: ''
        }
    }
    

    agregarElemento = (e) => {
        e.preventDefault();
        this.props.setArreglo([
            ...this.props.arreglo,
            this.state.valor
        ]);

        this.setState({
            valor: ''
        });
    }

    cambiarValor = (e) => {
        this.setState({
            valor: e.target.value
        })
    } 

    render() {
        return <form onSubmit={this.agregarElemento}>
            <input type="text" name="valor" value={this.state.valor} onChange={this.cambiarValor}/>
            <button type="submit">Agregar</button>
        </form>
    }
}

export default Agregar;