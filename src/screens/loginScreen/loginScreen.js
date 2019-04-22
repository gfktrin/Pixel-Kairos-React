import React from 'react';
import { Container, Input, Card, Row, Col, Button } from 'react-materialize';

import './loginScreen.scss';
import ApiWrapper from '../../components/utils/api';
import Loader from '../../components/loader/loader';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.changeHasAccount = this.changeHasAccount.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email : '',
      password: '',
      hasAccount: true,
      isLoading: false,
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

  handleEmailChange (e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange (e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmitLogin (e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    let credentials = {
      email: this.state.email,
      password: this.state.password,
    };
    ApiWrapper.makeLogin(credentials)
    .then(response => {
      if (response === 'error') {
        console.log('deu ruim');
        this.setState({
          isLoading: false,
        });
      }
      if (response === 'success') {
        this.props.history.push('/');
      }
    });
  }

  showRegisterForm () {
    return (
      <div className="login-card-container">
        <img src="logo.png" alt="Pixel Kairos" className="login-img" />
        <Input type="email" label="Email" s={12} />
        <Input type="email" label="Confirme seu email" s={12} />
        <Input type="password" label="Senha" s={12} />
        <Input type="checkbox" label={<p>Concordo com os <a>termos de uso</a></p>} s={12} />
        <div>
          <Button waves="light" className="login-btn">
            Acessar
          </Button>
        </div>
        <p className="register">Já possui uma conta? <a href="javascript:void(0)" onClick={this.changeHasAccount}>Entrar</a></p>
      </div>
    )
  }

  showLoginForm () {
    return (
      <div className="login-card-container">
        <img src="logo.png" alt="Pixel Kairos" className="login-img" />
        <form onSubmit={this.handleSubmitLogin}>
          <Input type="email" label="Email" ref="email"
          onChange={this.handleEmailChange} value={this.state.email} s={12} />
          <Input type="password" ref="password" label="Senha"
          onChange={this.handlePasswordChange} value={this.state.password} s={12} />
          <a href="/" className="forgot-pass">Esqueceu a senha?</a>
          <div>
            <Button waves="light" className="login-btn" type="submit">
              Acessar
            </Button>
          </div>
        </form>
        <p className="register">Novo por aqui? <a href="javascript:void(0)" onClick={this.changeHasAccount}>Criar conta</a></p>
      </div>
    )
  }

  checkLoading () {
    if (this.state.isLoading) {
      return (
        <Loader />
      );
    }
    if (this.state.hasAccount) {
      return this.showLoginForm();
    }
    return this.showRegisterForm();
  }

  render () {
    return (
      <main>
        <Container className="login-container">
          <Row>
            <Col m={3} s={12} />
            <Col m={6} s={12}>
            <Card className='large white darken-1'>
              {this.checkLoading()}
            </Card>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default LoginScreen;
