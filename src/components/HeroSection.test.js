// src/components/HeroSection.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HeroSection from './HeroSection';

describe('HeroSection Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HeroSection />);
    expect(wrapper.exists()).to.be.true;
  });

  
});
