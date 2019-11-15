import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Customization from './Customization';

jest.unmock('./Customization');

describe('Customization', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<Customization/>);
  });
  it('Customization exists', () => {
    expect(tree.length).toEqual(1);
  });
});