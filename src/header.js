import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src="../assets/logo2.jpg" alt="" className="logo logo-container" />
          <div className="textos">
            <h5>Master Court</h5>
            <p>Master Court - Maipú</p>
          </div>
          <div className="menu">
            <a href="#" className="menu-item">Home</a>
            <a href="#" className="menu-item">Sobre nosotros</a>
            <a href="#" className="menu-item">Agendar</a>
            <a href="#" className="menu-item">Contáctanos</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
