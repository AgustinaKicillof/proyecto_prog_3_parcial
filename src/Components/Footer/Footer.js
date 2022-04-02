import React, { Component } from "react";
import './footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <footer>
        <ul className="team">
          <li>Agustina Kicillof</li>
          <li>Camila Llanos</li>
          <li>Horacio Barbeito</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
