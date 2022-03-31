import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
            <header>
            <h1>Título/ Nombre de la app</h1>
            <section>
              <p>Ordenar ASC/ DESC</p>
              <i className="fas fa-th"></i>
              <i className="fas fa-align-justify"></i>
              <form action="">
                <h1>Título/ Nombre de la app</h1>
              </form>
              <button type="button">Cargar más tarjetas</button>
            </section>
          </header>
        );
    }
}

export default Header;
