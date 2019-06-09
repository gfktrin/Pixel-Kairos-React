import React from 'react';
import { shallow } from 'enzyme';

import CourseCard from '../../components/courseCard/courseCard';

const props = {
  courseImg: 'https://site.com/link-to-image',
  courseName: 'Test Course',
  courseDescription: 'A course made for tests',
};

describe('CourseCard', () => {
  it('Tests default render with props', () => {
    const wrapper = shallow(
      <CourseCard {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
