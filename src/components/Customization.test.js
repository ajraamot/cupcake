import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Customization from './Customization';

jest.unmock('./Customization');

describe('Customization', () => {
  let tree;
  const defaultCupCake = {
    base: 'chocolate',
    frosting: 'chocolate',
    toppings: []
  };
  let baseCard;
  beforeEach(() => {
    tree = shallow(<Customization cupcake={defaultCupCake}/>);
    baseCard = tree.find('.customization__card').at(0);
  });

  it('Customization exists', () => {
    expect(tree.length).toEqual(1);
  });

  it('has a three cards, one for each component', () => {
    expect(tree.find('.customization__card').length).toEqual(3);
  });

  describe('Base component', () => {
    it('has title text', () => {
        expect(baseCard.find('.customization__card-title').text()).toEqual('Step 1: Choose the base...');
    });

    it('has has radio buttons', () => {
        const expectedBases = ['Chocolate', 'Vanilla', 'Marble', 'Champagne', 'Strawberry', 'Lemon', 'Angel Food', 'Red Velvet'];
        const expectedBaseValues = expectedBases.map(base => base.replace(' ', '-').toLowerCase());
        let index = 0;
        expectedBases.forEach((base, index) => {
            expect(baseCard.find('input').at(index).prop('type')).toEqual('radio');
            expect(baseCard.find('input').at(index).prop('name')).toEqual('base');
            expect(baseCard.find('input').at(index).prop('value')).toEqual('b_' + expectedBaseValues[index]);
            // TODO: figure out how to test this
            // expect(baseCard.find('input').at(index).text()).toEqual(' ' + base);
        }); 
    });
  
  });
});