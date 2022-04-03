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
        <div className="footer-title">
          <h1 className="footer-KBL">KBL Music</h1>
          <img className='footer-logo' src="/LogoKBL.png" alt="logo"></img>
          <p className="footer-develop">Desarrollado por:</p>
        </div>
        <div className="footer-members">
        <ul className="team">
          <li>Agustina Kicillof</li>
          <li>Camila Llanos</li>
          <li>Horacio Barbeito</li>
        </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
