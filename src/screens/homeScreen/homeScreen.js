import React from 'react';

import { Container, Button } from 'react-materialize';
import Hero from '../../components/hero/hero';
import HomeCards from '../../components/homeCards/homeCards';
import CoursesSectionHome from '../../components/coursesSectionHome/coursesSectionHome';
import HomeCourses from '../../components/homeCourses/homeCourses';
import HomeFooter from '../../components/homeFooter/homeFooter';
import Header from '../../components/header/header';

import './homeScreen.scss';

const HomeScreen = () => (
  <main>
    <Header />
    <Hero />
    <Container id="container-home">
      <HomeCards />
    </Container>
    <CoursesSectionHome />
    <Container>
      <HomeCourses />
    </Container>
    <HomeFooter />
    <div className="fixed-action-btn horizontal">
    <Button floating large className='teal darken-3' waves='light' icon='announcement' class="floating" />
    </div>
  </main>
);

export default HomeScreen;
