import React, {Component} from 'react';
import Hijo from "./Hijo";

class Padre extends Component {
    constructor() {
        super();
        this.state = {
            texto: '',
            input: ''
        }
    }

    actualizarValor = (e) => {
        e.preventDefault();
        this.setState({ 
            ...this.state,
            texto: this.state.input
        })
    }

    actualizarInput = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        })
    }

    render() {
        return <>
            <h1>Componente Padre</h1>
            <form onSubmit={this.actualizarValor}>
                <input type="text" name="input" value={this.state.input} onChange={this.actualizarInput}></input>
                <button type="submit">Actualziar Valor</button> 
            </form>


            <Hijo valor={this.state} numero={10}></Hijo>
        </>;
    }
}

export default Padre;