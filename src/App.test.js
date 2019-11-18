import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

jest.unmock('./App');

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<App/>);
  });
  it('App exists', () => {
    expect(tree.length).toEqual(1);
  });

  describe('tabs', () => {
    it('has a Tablist', () => {
      expect(tree.find('Tabs').length).toEqual(1);
      expect(tree.find('TabList').length).toEqual(1);
    });
    
    it('has two tabs', () => {
      expect(tree.find('Tab').length).toEqual(2);
      expect(tree.find('Tab').at(0).props().children).toEqual('Cupcake Customization');
      expect(tree.find('Tab').at(1).props().children).toEqual('Cupcake Order Management');
    });
  
    it('has two tab panels', () => {
      expect(tree.find('TabPanel').length).toEqual(2);
      expect(tree.find('TabPanel').at(0).find('Customization').length).toEqual(1);
      expect(tree.find('TabPanel').at(1).find('OrderManagement').length).toEqual(1);
    });  
  });

  describe('constructor', () => {
    it('has default state', () => {
      const expectedState = {
        cupcake: {
          base: 'chocolate',
          frosting: 'chocolate',
          toppings: []
        },
        order: {
          cupcakes: []
        }
      };
      expect(tree.instance().state).toEqual(expectedState);
    });
  });

  describe('Customization', () => {
    it('passes cupcake state to Customization component', () => {
      expect(tree.find('Customization').prop('cupcake')).toEqual(tree.instance().state.cupcake);

    });

  });
});