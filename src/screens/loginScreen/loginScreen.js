import React from 'react';
import { Container, Input, Card, Row, Col, Button } from 'react-materialize';

import './loginScreen.scss';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
      hasAccount: true,
    };
  }

  changeHasAccount () {
    if (this.state.hasAccount) {
      this.setState({
        hasAccount: false,
      });
    } else {
      this.setState({
        hasAccount: true,
      });
    }
  }

  showRegisterForm () {
    return (
      <div className="login-card-container">
        <img src="logo.png" alt="Pixel Kairos" className="login-img" />
        <Input label="Email" s={12} />
        <Input label="Confirme seu email" s={12} />
        <Input type="password" label="Senha" s={12} />
        <Input type="checkbox" label={<p>Concordo com os <a>termos de uso</a></p>} s={12} />
        <div>
          <Button waves="light" className="login-btn">
            Acessar
          </Button>
        </div>
        <p className="register">Já possui uma conta? <a href="javascript:void(0)" onClick={this.changeHasAccount.bind(this)}>Entrar</a></p>
      </div>
    )
  }

  showLoginForm () {
    return (
      <div className="login-card-container">
        <img src="logo.png" alt="Pixel Kairos" className="login-img" />
        <Input label="Email" s={12} />
        <Input type="password" label="Senha" s={12} />
        <a href="/" className="forgot-pass">Esqueceu a senha?</a>
        <div>
          <Button waves="light" className="login-btn">
            Acessar
          </Button>
        </div>
        <p className="register">Novo por aqui? <a href="javascript:void(0)" onClick={this.changeHasAccount.bind(this)}>Criar conta</a></p>
      </div>
    )
  }

  render () {
    return (
      <main>
        <Container className="login-container">
          <Row>
            <Col m={3} s={12} />
            <Col m={6} s={12}>
            <Card className='large white darken-1'>
              {this.state.hasAccount ? this.showLoginForm() : this.showRegisterForm()}
            </Card>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default LoginScreen;
