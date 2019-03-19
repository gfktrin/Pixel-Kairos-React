import React from 'react';

import { Icon } from 'react-materialize';
import './hero.scss';

const Hero = () => (
  <div className="hero">
    <div className="hero-container">
      <img src="painel.png" alt="hero" className="banner"/>
      <div className="centered-text-box">
        <div className="hero-text">
          <h1 className="title">Tecnologia a seu favor</h1>
          <p className="description">
            Aprenda a desenvolver de forma eficiente com as melhores ferramentas do mercado em cursos completos e com preço acessível
          </p>
          <a href="#container-home">
            <Icon large className="more">expand_more</Icon>
          </a>
        </div>
      </div>
    </div>
    </div>
);

export default Hero;
