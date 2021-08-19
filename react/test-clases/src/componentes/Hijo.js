import React, { Component } from 'react';

class Hijo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: props.numero
        } 

    }

    aumentar = (e) => {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        return <>
            <h1>Componente Hijo</h1>

            <h3>El valor ingresado en el componente padre es: {this.props.valor.texto}</h3>

            <h3>El valor que se esta ingresado es: {this.props.valor.input}</h3>

            <h3>El número es: {this.state.num}</h3>

            <button type="button" onClick={this.aumentar}>Aumentar</button>
        </>;
    }
}

export default Hijo;