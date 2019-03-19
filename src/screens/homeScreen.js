import React from 'react';

import { Container, Button, Row, Col, Card } from 'react-materialize';
import Hero from '../components/hero/hero';

const HomeScreen = () => (
  <main>
    <Hero />
    <Container>
      <Row>
        <Col m={4} s={12}>
          <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
          I am a very simple card.
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
