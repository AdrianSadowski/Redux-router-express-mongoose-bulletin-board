import React from 'react';
import { shallow } from 'enzyme';
import { FormPostAddComponent } from './FormPostAdd';

describe('Component FormPostAdd', () => {
  it('should render without crashing', () => {
    const component = shallow(<FormPostAddComponent />);
    expect(component).toBeTruthy();
  });
});
