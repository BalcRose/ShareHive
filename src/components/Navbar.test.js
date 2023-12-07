// src/components/Navbar.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()).to.be.true;
  });

  
});
