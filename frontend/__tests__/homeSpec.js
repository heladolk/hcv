import React from 'react'
import { mount } from 'enzyme'

import { Home } from '../src/home'

describe('Home', () => {
  it('renders Home component', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find('.home').length).toBe(1);
  })
});

