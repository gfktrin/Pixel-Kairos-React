import React from 'react';

import { Icon } from 'react-materialize';
import './hero.scss';

const Hero = () => (
  <div className="hero">
    <div className="hero-container">
      <img src="painel.png" alt="hero" className="hero-banner"/>
      <div className="hero-centered-box">
        <div className="hero-text">
          <h1 className="hero-title">Tecnologia a seu favor</h1>
          <p className="hero-description">
            Aprenda a desenvolver de forma eficiente com as melhores ferramentas do mercado em cursos completos e com preço acessível
          </p>
          <a href="#container-home">
            <Icon large className="hero-more">expand_more</Icon>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
