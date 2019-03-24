import React from 'react';

import { Navbar, Row, Button } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <Row>
    <Navbar brand={<div className="logo"><img src="logo.png" alt="Pixel Kairos" /></div>} right className='white'>
      <li><NavLink to="/"><div className="navitem">Home</div></NavLink></li>
      <li><NavLink to="/empresa"><div className="navitem">A empresa</div></NavLink></li>
      <li><NavLink to="/loja"><div className="navitem">Loja</div></NavLink></li>
      <li><NavLink to="/contato"><div className="navitem">Contato</div></NavLink></li>
      <div className="nav-btn-container">
        <NavLink to="/login">
          <Button className="nav-btn">Entrar</Button>
        </NavLink>
      </div>
    </Navbar>
  </Row>
);

export default Header;
