import React, { Component } from 'react';

class Anidado extends Component {

    render() {
        return <>
            <div>
                <h1>{this.props.texto}</h1>
            </div>
            <div style={{backgroundColor: 'green', color:'black', textAlign:'center'}}>
            {
                this.props.children
            }
            </div>
        </>
    }
}

export default Anidado;