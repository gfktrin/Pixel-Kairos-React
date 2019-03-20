import React from 'react';

import { Container, Button } from 'react-materialize';
import Hero from '../components/hero/hero';
import HomeCards from '../components/homeCards/homeCards';
import CoursesSectionHome from '../components/coursesSectionHome/coursesSectionHome';

import './homeScreen.scss';

const HomeScreen = () => (
  <main>
    <Hero />
    <Container id="container-home">
      <HomeCards />
    </Container>
    <CoursesSectionHome />
    <div className="fixed-action-btn horizontal">
    <Button floating large className='teal darken-3' waves='light' icon='add' class="floating" />
    </div>
  </main>
);

export default HomeScreen;
