import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem, Modal, Button, Icon } from 'react-materialize';
import UserStore from '../store/userStore';
import LessonPlayer from '../lessonPlayer/lessonPlayer';

import './coursePanel.scss';

class CoursePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLessonPlaying: false,
      lessonVideo: null,
      lessonName: null,
    }
  }

  componentDidMount() {
    let store = this.props.store;
    store.set('selectedCourse')(undefined);
  }

  handlePlayLesson = (lesson) => {
    const isLessonPlaying = this.state.isLessonPlaying;

    if(!isLessonPlaying) {
      this.setState({
        isLessonPlaying: true,
        lessonVideo: lesson.link,
        lessonName: lesson.name,
      });
    } else {
      this.setState({
        isLessonPlaying: false,
        lessonVideo: null,
        lessonName: null,
      });
    }
  }

  getModuleLessons(courseModule) {
    if(!courseModule) {
      return null;
    }

    return(
      courseModule.lessons.map(lesson => (
        <CollapsibleItem header={lesson.name} icon="ondemand_video" className="lesson-collapsible">
          <Button href="javascript:void(0)" id="video-btn" onClick={() => this.handlePlayLesson(lesson)}>
            <Icon large className="hero-more">play_arrow</Icon>
          </Button>
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

  showLessonPlayer() {
    return(
      <div>
        <Button waves="light" className="lesson-back" onClick={this.handlePlayLesson}>
        Voltar
        <Icon left>
        arrow_back_ios
        </Icon>
        </Button>
        <h5 className="lesson-name-video">{this.state.lessonName}</h5>
        <LessonPlayer lessonVideo={this.state.lessonVideo} />
      </div>
    );
  }

  showCourseNavigation(selectedCourse){
    return (
      <div>
        <h5 className="subtitle">{ selectedCourse ? selectedCourse.name : null }</h5>
        <Collapsible>
          { this.getCourseModules() }
        </Collapsible>
      </div>
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
          { this.state.isLessonPlaying ? this.showLessonPlayer() : this.showCourseNavigation(selectedCourse) }
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserStore.withStore(CoursePanel);
