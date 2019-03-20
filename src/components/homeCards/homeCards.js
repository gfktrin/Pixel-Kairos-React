import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';

import './homeCards.scss';

const HomeCards = () => (
  <div className="home-cards-container">
    <Row>
      <Col m={4} s={12}>
        <Card className='white darken-1' textClassName='black-text' title={<div class="card-title"><Icon medium className="more-black">attach_money</Icon><h4>Preço</h4></div>}>
          Oferecemos cursos completos com preço acessível
          <br />
          <br />
          <br />
        </Card>
      </Col>
      <Col m={4} s={12}>
        <Card className='white darken-1' textClassName='black-text' title={<div class="card-title"><Icon medium className="more-black">thumb_up_alt</Icon><h4>Qualidade</h4></div>}>
          Aprenda com quem está no mercado, usando as tecnologias mais recentes e com suporte personalizado
          <br />
          <br />
        </Card>
      </Col>
      <Col m={4} s={12}>
        <Card className='white darken-1' textClassName='black-text' title={<div class="card-title"><Icon medium className="more-black">timeline</Icon><h4>Crescimento</h4></div>}>
          Nossos cursos abordam os assuntos com profundidade, de forma a garantir o máximo de aprendizado possível dos alunos
        </Card>
      </Col>
    </Row>
  </div>
);

export default HomeCards;
