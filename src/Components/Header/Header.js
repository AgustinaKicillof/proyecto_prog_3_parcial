import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props){ 
        super(props)
        this.state={ //definimos el estado inicial del comp//
          value: "",
          button: 'Reordenar'
        }
    }
    guardarCambios(datos){ 
      this.setState({ //actualizará el estado interno del componente/Cuando state se modifica el componente se vuelve a renderizar//
        value: datos.target.value
      },() => this.props.buscarTarjetas(this.state.value)) //se ejecutará la funcion una vez que tenga la actualización de los datos//
     
    }
    evitarSubmit(event){
      event.preventDefault()
    }
    render() {
        return (
            <header>
            
            <div className='header-top'>
            <a className='refresher' href='local'><h1 className='header-title'>KBL Music</h1><img className='header-logo' src='/LogoKBL.png' alt='Logo'></img> </a>
            </div>
            
            <section className="headerSection">
            <form  action="" onSubmit={(event)=> this.evitarSubmit(event)}>
              <input className='buscador' type="text" onChange={datos => this.guardarCambios(datos)} name="usuario" placeholder='Buscar Cancion' value={this.state.value}/>
              </form>
              <button className='order' onClick={()=>this.props.reordenar()}>{this.state.button}</button>
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


