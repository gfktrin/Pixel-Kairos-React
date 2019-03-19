import React from 'react';

import { Container, Button, Row, Col, Card, Icon } from 'react-materialize';
import Hero from '../components/hero/hero';
import './homeScreen.scss';

const HomeScreen = () => (
  <main>
    <Hero />
    <Container id="container-home">
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
            Aprenda com quem está no mercado, usando as tecnologias mais recentes para garantir o máximo de recursos
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
    </Container>
    <div className="fixed-action-btn horizontal">
    <Button floating large className='teal darken-3' waves='light' icon='add' class="floating" />
    </div>
  </main>
);

export default HomeScreen;
