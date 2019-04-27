import React from 'react';
import { Player } from 'video-react';
//import { Icon } from 'react-materialize';
import './lessonPlayer.scss';
import '../../../node_modules/video-react/dist/video-react.css';

const LessonPlayer = (props) => (
  <Player
  playsInline
  src={props.lessonVideo}
  />
);

export default LessonPlayer;
