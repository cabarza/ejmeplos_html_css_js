import React, { Component } from 'react';
 
class HolaMundo extends Component {
    
    render() {
        return <div style={{with: '100%', backgroundColor: 'red', color: 'white', textAlign: 'center', height: '50px'}}>
                <input type="text" name="nTitulo" id="iTitulo" style={{marginTop: '20px'}} value={this.props.titulo} onChange={e => this.props.setTitulo(e.target.value)}/>
            </div>
    }
}

export default HolaMundo;