import React from 'react';
import { Row, Col } from 'react-materialize';

import './homeCourses.scss';
import CourseCard from '../courseCard/courseCard';
import ApiWrapper from '../utils/api';

class HomeCourses extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: null,
    }
  }

  componentDidMount() {
    ApiWrapper.getData('courses')
    .then(data => this.setState({ courses: data }));
  }

  getCourseCards = (courses) => {
    return (
      courses.map(course => (
        <CourseCard courseName={course.name}
            courseDescription={course.description} />
      ))
    )
  }

  render() {
    const courses = this.state.courses ? this.state.courses : '';
    const courseCards = courses ? this.getCourseCards(courses) : '';

    return(
      <div className="home-courses-container">
        <Row>
          <Col m={4} s={12}>
            {courseCards}
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeCourses;
