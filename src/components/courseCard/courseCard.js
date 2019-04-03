import React from 'react';
import { Card, CardTitle } from 'react-materialize';

import './courseCard.scss';

const CourseCard = (props) => (
  <Card className='big'
    header={<CardTitle image='course-card-1.png'></CardTitle>}
    actions={[<a href='#' className="course-link">Conheça o curso</a>]}>
      <h5 className="home-course-title">{props.courseName}</h5>
      {props.courseDescription}
  </Card>
);

export default CourseCard;
