import React from 'react';

import { Navbar, Row, Button } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './header.scss';
import ApiWrapper from '../utils/api';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    ApiWrapper.logout().then(
      window.location.reload()
    );
  }

  guestHeader() {
    return (
      <Navbar brand={<div className="logo"><img src="logo.png" alt="Pixel Kairos" /></div>} right className='white'>
          <li><NavLink to="/"><div className="navitem">Home</div></NavLink></li>
          <li><NavLink to="/empresa"><div className="navitem">A empresa</div></NavLink></li>
          <li><NavLink to="/loja"><div className="navitem">Loja</div></NavLink></li>
          <div className="nav-btn-container">
            <NavLink to="/login">
              <Button className="nav-btn">Entrar</Button>
            </NavLink>
          </div>
        </Navbar>
    );
  }

  userHeader() {
    return (
      <Navbar brand={<div className="logo"><img src="logo.png" alt="Pixel Kairos" /></div>} right className='white'>
          <li><NavLink to="/"><div className="navitem">Configurações</div></NavLink></li>
          <li><a href="javascript:void(0)" className="exit-link" onClick={this.handleLogout}>Sair</a></li>
        </Navbar>
    );
  }

  render() {
    return (
      <Row>
        {ApiWrapper.isAuthenticated() ? this.userHeader() : this.guestHeader()}
      </Row>
    );
  }
}

export default Header;
