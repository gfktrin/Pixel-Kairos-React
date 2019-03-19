import React from 'react';

import { Navbar, NavItem, Row, Button } from 'react-materialize';
import './header.scss';

const Header = () => (
  <Row>
    <Navbar brand={<div className="logo"><img src="logo.png" alt="Pixel Kairos" /></div>} right className='white'>
      <NavItem href='/'><div className="navitem">Home</div></NavItem>
      <NavItem href='/'><div className="navitem">A empresa</div></NavItem>
      <NavItem href='/'><div className="navitem">Loja</div></NavItem>
      <NavItem href='/'><div className="navitem">Contato</div></NavItem>
      <div className="nav-btn-container">
        <Button className="nav-btn">Entrar</Button>
      </div>
    </Navbar>
  </Row>
);

export default Header;
