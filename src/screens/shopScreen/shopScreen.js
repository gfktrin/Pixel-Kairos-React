import React from 'react';
import { Icon, Container, Row, Col } from 'react-materialize';

import Header from '../../components/header/header';
import CourseCard from '../../components/courseCard/courseCard';

import './shopScreen.scss';
import HomeFooter from '../../components/homeFooter/homeFooter';

const ShopScreen = () => (
  <main>
    <Header />
    <div className="shop-section-container">
      <div className="shop-section-text">
        <Icon medium className='shop-icon'>school</Icon>
        <h4 className="shop-section-title">Conheça nossos cursos</h4>
        <p className="shop-section-description">
          Cursos de diversos temas com conteúdo trabalhado e aprofundado, você aprenderá sem necessidade de conhecimento prévio no assunto
        </p>
      </div>
    </div>
    <Container>
      <Row>
        <Col m={4} s={12}>
          <CourseCard courseName='Curso de desenvolvimento de games'
              courseDescription='Já sonhou em criar seu proprio jogo? Com esse curso, você vai aprender a criar jogos de diferentes tipos com várias ferramentas, de forma que qualquer um possa tirar seu projeto do papel.' />
        </Col>
      </Row>
    </Container>
    <HomeFooter />
  </main>
);

export default ShopScreen;
