import React from 'react';

import { Footer, Icon } from 'react-materialize';
import './homeFooter.scss';

const HomeFooter = () => (
  <Footer copyrights="© 2019 Pixel Kairos"
  links={
    <div>
    <h5>Atendimento ao cliente</h5>
    <p className="contact-footer"><Icon small className="more-black left">email</Icon>
    Email: contato@pixelkairos.com.br</p>
    </div>
  }
  className='white'
>
    <h5 className="black-text">Sobre a Pixel Kairos</h5>
    <p className="black-text text-lighten-4">A Pixel Kairos é uma empresa de de cursos online voltados a área de desenvolvimento e tecnologia.</p>
  </Footer>
);

export default HomeFooter;
