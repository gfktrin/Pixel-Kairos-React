import React from 'react';

import { Container, Button } from 'react-materialize';
import Hero from '../../components/hero/hero';
import HomeCards from '../../components/homeCards/homeCards';
import CoursesSectionHome from '../../components/coursesSectionHome/coursesSectionHome';
import HomeCourses from '../../components/homeCourses/homeCourses';
import HomeFooter from '../../components/homeFooter/homeFooter';
import Header from '../../components/header/header';
import ApiWrapper from '../../components/utils/api';
import CoursePanel from '../../components/coursePanel/coursePanel';

import './homeScreen.scss';

class HomeScreen  extends React.Component {
  guestscreen() {
    return (
      <div>
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
      </div>
    )
  }

  userScreen() {
    return(
      <CoursePanel />
    );
  }

  render() {
    return (
      <main>
        <Header />
        {ApiWrapper.isAuthenticated() ? this.userScreen() : this.guestscreen()}
      </main>
    );
  }
}

export default HomeScreen;
