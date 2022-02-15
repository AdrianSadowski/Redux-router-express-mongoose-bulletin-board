import React from 'react';
import { shallow } from 'enzyme';
import { FormPostEditComponent } from './FormPostEDit';

describe('Component FormPostEdit', () => {
  it('should render without crashing', () => {
    const component = shallow(<FormPostEditComponent />);
    expect(component).toBeTruthy();
  });
});
