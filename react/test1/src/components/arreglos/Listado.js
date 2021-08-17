import react, {Component} from "react";

class Listado extends Component {

    render() {
        console.log('ARREGLO', this.props.arreglo);
        return <>
            <ul>
                {this.props.arreglo && this.props.arreglo.map((dato, i) => 
                    <li key={i}>{dato}</li>
                )}
            </ul>
        </>
    }
}

export default Listado;