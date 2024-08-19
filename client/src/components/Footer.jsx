import React from 'react';
import '../styles/footer.css'; 


import golden from '../assets/golden.jpg';
import border from '../assets/border.jpg';
import samoyedo from '../assets/samoyedo.jpg';
import labrador from '../assets/labrador.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Acerca de Nosotros</h4>
          <p>Somos una comunidad dedicada a los amantes de los perros. Explora, aprende y comparte información sobre diversas razas de perros.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Útiles</h4>
          <ul>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/createDog">Crear Perro</a></li>
            <li><a href="/favoritos">Favoritos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@dog.com</p>
          <p>Teléfono: +123 456 789</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Galería de Perros</h4>
          <div className="dog-gallery">
            <img src={golden} alt="Dog 1" />
            <img src={border} alt="Dog 2" />
            <img src={samoyedo} alt="Dog 3" />
            <img src={labrador} alt="Dog 4" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dogs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
