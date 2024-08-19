import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/intropage.css'; // Asegúrate de que este archivo existe y está en la ruta correcta

// Importa las imágenes
import introImage from '../assets/Mi proyecto.png';
import featureImage1 from '../assets/busca a tu perro favorito.png';
import featureImage2 from '../assets/filtra por raza o temperamento.png';
import featureImage3 from '../assets/guardalos siempre contigo.png';
import featureImage4 from '../assets/Razas de todo el mundo.png';
import featureImage5 from '../assets/agrega un nuevo amigo.png';

const IntroPage = () => {
  return (
    <div className="intro-container">
      <div className="header">
        <h1 className="logo">DOGS</h1>
        <img src={introImage} alt="Imagen de Introducción" className="intro-image" />
        <div className="intro-image-container">
          <p className="intro-text">PI HENRY Santiago Pérez</p>
        </div>
      </div>
      <div className="intro-text2">
        <h2>¡Bienvenido al Mejor Buscador de Perros!</h2>
        <p>Explora diversas razas, encuentra tu favorita y aprende todo sobre ellas.</p>
      </div>
      <div className="features">
        <div className="feature-box">
          <img src={featureImage1} alt="Busca a tu perro favorito" />
          <p>Busca a tu perro favorito</p>
        </div>
        <div className="feature-box">
          <img src={featureImage2} alt="Filtra por raza o temperamento" />
          <p>Filtra por raza o temperamento</p>
        </div>
        <div className="feature-box">
          <img src={featureImage3} alt="Guardalos siempre contigo" />
          <p>Guardalos siempre contigo</p>
        </div>
        <div className="feature-box">
          <img src={featureImage4} alt="Razas de todo el mundo" />
          <p>Razas de todo el mundo</p>
        </div>
        <div className="feature-box">
          <img src={featureImage5} alt="Agrega un nuevo amigo" />
          <p>Agrega un nuevo amigo</p>
        </div>
      </div>
      <Link to="/home" className="start-button">
        <span>Comenzar a Explorar</span>
        <span className="arrow">&#8594;</span> {/* Flecha hacia la derecha */}
      </Link>
    </div>
  );
};

export default IntroPage;
