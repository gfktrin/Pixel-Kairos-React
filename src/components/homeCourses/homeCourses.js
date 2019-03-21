import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';

import './homeCourses.scss';

const HomeCourses = () => (
  <div className="home-courses-container">
    <Row>
      <Col m={4} s={12}>
      <Card className='big'
      header={<CardTitle image='course-card-1.png'></CardTitle>}
      actions={[<a href='#' className="course-link">Conheça o curso</a>]}>
        <h5 className="home-course-title">Curso de desenvolvimento de games </h5>
        Já sonhou em criar seu proprio jogo? Com esse curso, você vai aprender a criar jogos de diferentes tipos com várias ferramentas, de forma que qualquer um possa tirar seu projeto do papel.
      </Card>
      </Col>
    </Row>
  </div>
);

export default HomeCourses;
