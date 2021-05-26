import React from 'react';
import {  configure,shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Title} from './components/Title';
import {Chronometer} from './components/Chronometer';
import {Record} from './components/Record';

import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper =  shallow(<App />)
  })

  it('should render title', () => {
    expect(wrapper.contains(<Title />)).toEqual(true);
  })

  it('should render chronometer', () => {
    expect(wrapper.contains(<Chronometer />)).toEqual(true);
  })


  it('should render records', () => {
    expect(wrapper.contains(<Record />)).toEqual(true);
  })
});