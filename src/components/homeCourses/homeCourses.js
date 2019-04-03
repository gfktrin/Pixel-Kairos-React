import React from 'react';
import { Row, Col } from 'react-materialize';

import './homeCourses.scss';
import CourseCard from '../courseCard/courseCard';

const HomeCourses = () => (
  <div className="home-courses-container">
    <Row>
      <Col m={4} s={12}>
      <CourseCard courseName='Curso de desenvolvimento de games'
        courseDescription='Já sonhou em criar seu proprio jogo? Com esse curso, você vai aprender a criar jogos de diferentes tipos com várias ferramentas, de forma que qualquer um possa tirar seu projeto do papel.' />
      </Col>
    </Row>
  </div>
);

export default HomeCourses;
