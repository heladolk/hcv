import React from 'react'
import { shallow } from 'enzyme'

import Board from '../src/board'
import List from '../src/components/list'

describe('Board page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Board />)
  })

  it('renders Board component and find a title', () => {
    expect(wrapper.find('.board').length).toBe(1)
    expect(wrapper.find('.title').text()).toContain("todo-app")
  })

  it('has a list as a sub-component', () => {
    expect(wrapper.contains(<List />)).toBeTruthy()
  })

})

