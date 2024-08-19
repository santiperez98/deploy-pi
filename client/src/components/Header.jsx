import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import feetLogo from "../assets/Mi proyecto.png";
import backLogo from "../assets/angulo-izquierdo.png";
import ButtonMenu from '../components/ButtonMenu'; // Asegúrate de que la ruta sea correcta
import "../styles/header.css";

const Header = ({ show }) => {
  const location = useLocation();
  const hideCreateDog = location.pathname === "/createDog";
  const hideFavorites = location.pathname === "/favoritos";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="Header">
      <div className="Header__back">
        <Link to="/">
          <img src={backLogo} alt="Botón para volver atrás" className="Header__back-icon" />
          <span className="Header__back-text">Back</span>
        </Link>
      </div>
      <div className="Header__logo-container">
        <img className="Header__logo" src={feetLogo} alt="Logo de la página" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`Header__nav ${isOpen ? 'open' : ''}`}>
        {show && <ButtonMenu />}
        <ul className="Nav">
          <Link to="/home">
            <li>Inicio</li>
          </Link>
          {!hideCreateDog && (
            <Link to="/createDog">
              <li>Crear perro</li>
            </Link>
          )}
          {!hideFavorites && (
            <Link to="/favoritos">
              <li>Favoritos</li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
