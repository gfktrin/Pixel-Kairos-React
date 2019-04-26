import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';

import './coursePanel.scss';
import UserStore from '../store/userStore';

class CoursePanel extends React.Component {

  getModuleLessons(courseModule) {
    if(!courseModule) {
      return null;
    }

    return(
      courseModule.lessons.map(lesson => (
        <CollapsibleItem header={lesson.name} icon="ondemand_video">
          <a href="#">
            <img className="video-thumb" alt="Video thumbnail" src="video-thumb.jpg" width="150" height="100" />
          </a>
        </CollapsibleItem>
      ))
    );
  }

  getCourseModules() {
    let store = this.props.store;
    let selectedCourse = store.get('selectedCourse');

    if(!selectedCourse) {
      return null;
    }

    return(
      selectedCourse.modules.map(courseModule => (
        <CollapsibleItem header={courseModule.name} icon="folder">
          <Collapsible>
            { this.getModuleLessons(courseModule) }
          </Collapsible>
        </CollapsibleItem>
      ))
    );
  }

  render() {
    let store = this.props.store;
    const selectedCourse = store.get('selectedCourse');

    return(
      <div>
        <Row>
          <Col m={3} s={12} />
          <Col m={8} s={12}>
            <h5 className="subtitle">{ selectedCourse ? selectedCourse.name : null }</h5>
            <Collapsible>
              { this.getCourseModules() }
            </Collapsible>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserStore.withStore(CoursePanel);
