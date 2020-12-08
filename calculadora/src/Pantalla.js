import React, { Component } from 'react';

class Pantalla extends Component {
    render (){
        return (
            <div className="pantalla">
                <div className="op-anteriores"><p>{this.props.secundario}</p></div>
                <div className="op-actual"><p></p>{this.props.principal}</div>
            </div>
        );
    }
}

export default Pantalla;

