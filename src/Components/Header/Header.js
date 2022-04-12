import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
          value: "",
          orden: 'Filas',
          button: ''
        }
    }
    guardarCambios(datos){
      /*let value = 'hola'*/
      this.setState({
        value: datos.target.value
      },() => this.props.buscarTarjetas(this.state.value))
     
    }
    evitarSubmit(event){
      event.preventDefault()
    }
    reordenar(){
      if (this.state.orden === 'Filas'){
        this.setState({
          orden: 'Filas',
          button: 'Ordenar por columnas'
        })
      }else{
        this.setState({
          orden: 'Columnas',
          button: 'Ordenar por filas',
        })
        
        }
      
    }
    render() {
        return (
            <header>
            
            <div className='header-top'>
            <a className='refresher' href='local'><h1 className='header-title'>KBL Music</h1><img className='header-logo' src='/LogoKBL.png' alt='Logo'></img> </a>
            </div>
            
            <section>
            <form  action="" onSubmit={(event)=> this.evitarSubmit(event)}>
              <input className='buscador' type="text" onChange={datos => this.guardarCambios(datos)} name="usuario" placeholder='Buscar Cancion' value={this.state.value}/>
              </form>
              <button className='order' onClick={()=>this.reordenar()}>{this.state.button}</button>
              <i className="fas fa-th"></i>
              <i className="fas fa-align-justify"></i>
              
              <button className='agrega-tarjetas' type="button" onClick={()=>this.props.agregarMas()}>Cargar más tarjetas</button>
            </section>
            
            
          </header>
        );
    }

    sumar(a,b){
      return a + b
    }

    restar(a,b){
      this.sumar(1,2)
    }
}

export default Header;


