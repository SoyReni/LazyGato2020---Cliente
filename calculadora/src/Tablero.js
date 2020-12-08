import React, { Component } from 'react';

class Tablero extends Component {
    constructor(props){
        super (props);
        this.state= {
            botonSeleccionado: ''
        };
    }

    onBotonSeleccionado(boton){
        this.setState(() =>{
            return {botonSeleccionado: boton.id}
        });
        var selected = boton.id;
        this.props.onUpdatePantalla(selected);
    }

    render (){
        const tablero = this.props.botones.map((boton) => {
            return (
            <div onClick={() => this.onBotonSeleccionado(boton)} className={boton.tipo} key={boton.id}><p>{boton.id}</p></div>
            );
        });
        return (
            <div>
                {tablero}
            </div>
        );
    }
}
export default Tablero;
