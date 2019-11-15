import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import OrderManagement from './OrderManagement';

jest.unmock('./OrderManagement');

describe('OrderManagement', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<OrderManagement/>);
  });
  it('Customization exists', () => {
    expect(tree.length).toEqual(1);
  });
});