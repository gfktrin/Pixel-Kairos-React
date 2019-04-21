import React from 'react';

import { Navbar, Row, Button, SideNav, SideNavItem, Input } from 'react-materialize';
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
      <SideNav fixed trigger={<Button icon="keyboard_arrow_right" className="nav-btn" />} options={{closeOnClick: true}}>
        <SideNavItem userView user={{
            background: 'https://placeimg.com/640/480/tech',
            image: 'static/media/react-materialize-logo.824c6ea3.svg',
            name: 'John Doe',
          }} />
          <li>
            <select class="browser-default">
              <option value="" disabled selected>Escolha um curso</option>
              <option value="1">Desenvolvimento de Games</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </li>
        <SideNavItem divider />
        <SideNavItem href="#!second">
          Configurações
        </SideNavItem>
        <SideNavItem waves href="javascript:void(0)" onClick={this.handleLogout}>
          Sair
        </SideNavItem>
      </SideNav>
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
