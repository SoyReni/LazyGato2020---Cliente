import React, { Component } from 'react';
import './App.css';
import Pantalla from './Pantalla';
import Tablero from './Tablero';
import { BOTONES } from './botones';

class App extends Component{

  constructor(props) {
    super (props);
    this.state = {
      botones: BOTONES,
      mprincipal: '', 
      msecundario:''
    }
  }
  
  updatePantalla = (valor) => {
    if (valor === '='){
      try{
        var result = eval(this.state.mprincipal).toString();
        this.setState({mprincipal: result});
        var igual = this.state.msecundario + ' | ' + result + '=' + this.state.mprincipal;
        this.setState({msecundario: igual});
      } catch (error){
        this.setState({mprincipal: ''})
      }
    } else if (valor === 'C'){
      this.setState({mprincipal: ''});
      this.setState({msecundario: ''});
    } else if (valor === '<'){
      if (this.state.mprincipal !== '') {
        var borrar = this.state.mprincipal.slice(0, -1);
        this.setState({mprincipal: borrar});
      }
    } else {
      var text = this.state.mprincipal + valor; 
      this.setState({mprincipal: text});
    }
  }

  render() {
  return (
    <div className='contenedor'>
      <header>Calculadora</header>
      <div className="sep">
        <Pantalla principal = {this.state.mprincipal} secundario = {this.state.msecundario}/>
        <Tablero botones = {this.state.botones} onUpdatePantalla={this.updatePantalla}/>
      </div>
      <footer><em>Sebastian Caballero 2020</em></footer>
    </div>
  );
  }
}

export default App;
