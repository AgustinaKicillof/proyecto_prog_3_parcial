import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <header>
            <div className='header-top'>
            <h1>KBL Music</h1> <img className='header-logo' src='/LogoKBL.png' alt='Lpogo'></img>
            </div>
            <section>
              <p>Ordenar ASC/ DESC</p>
              <i className="fas fa-th"></i>
              <i className="fas fa-align-justify"></i>
              <form action="">
                <h1>KBL Music</h1>
              </form>
              <button type="button" onClick={()=>this.props.agregarMas()}>Cargar más tarjetas</button>
            </section>
          </header>
        );
    }
}

export default Header;
