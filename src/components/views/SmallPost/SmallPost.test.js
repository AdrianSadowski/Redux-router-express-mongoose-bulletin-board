import React from 'react';
import { shallow } from 'enzyme';
import { SmallPostComponent } from './SmallPost';

describe('Component SmallPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<SmallPostComponent />);
    expect(component).toBeTruthy();
  });
});
