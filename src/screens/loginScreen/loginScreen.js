import React from 'react';
import { Container, Input, Card, Row, Col, Button } from 'react-materialize';

import './loginScreen.scss';

const LoginScreen = () => (
  <main>
    <Container>
      <Row>
        <Col m={3} s={12} />
        <Col m={6} s={12}>
        <Card className='large white darken-1'>
          <h1>Login</h1>
          <Input label="Email" s={12} />
          <Input type="password" label="Senha" s={12} />
          <a href="/">Esqueceu a senha?</a>
          <Button waves="light">
            Acessar
          </Button>
        </Card>
        </Col>
      </Row>
    </Container>
  </main>
);

export default LoginScreen;
