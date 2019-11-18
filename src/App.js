import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Customization from './components/Customization';
import OrderManagement from './components/OrderManagement';
import { fetchBases, fetchFrostings, fetchToppings } from './actions/CustomizationActions';

import './App.css';
import 'react-tabs/style/react-tabs.css';

class App extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      cupcake: {
        base: {"key":"peanutButterBase","name":"Peanut Butter Base","price":85,"ingredients":["peanut butter cup cake"]},
        frosting: {"key":"vanillaFrosting","name":"Vanilla Frosting","price":15,"ingredients":["vanilla frosting"]},
        toppings: []
      },
      deliveryTime: moment().add(1, 'days').toDate(),
      order: {
        cupcakes: []
      }
    };
  }

  componentDidMount = () => {
    this.props.fetchBases();
    this.props.fetchFrostings();
    this.props.fetchToppings();    
  }

  selectBase = (event) => {
    const newBase = this.props.bases.filter(base => base.key === event.target.value)[0]; 
    this.setState(prevState => ({
      ...prevState,
      cupcake: {
        ...prevState.cupcake,
        base: newBase        
      }
    }));
  }

  selectFrosting = (event) => {
    const newFrosting = this.props.frostings.filter(frosting => frosting.key === event.target.value)[0]; 
    this.setState(prevState => ({
      ...prevState,
      cupcake: {
        ...prevState.cupcake,
        frosting: newFrosting        
      }
    }));
  }

  selectToppings = (event) => {
    const selectedTopping = this.props.toppings.filter(topping => topping.key === event.target.value)[0]; 
    let newToppings = this.state.cupcake.toppings;

    if (event.target.checked) {
      newToppings = newToppings.concat([selectedTopping]);
    } else {
      newToppings = newToppings.filter(topping => topping.key !== selectedTopping.key);
    }

    this.setState(prevState => ({
      ...prevState,
      cupcake: {
        ...prevState.cupcake,
        toppings: newToppings        
      }
    }));
  }

  addCupcake = () => {
    let newCupcakesState = this.state.order.cupcakes;
    newCupcakesState = newCupcakesState.concat([this.state.cupcake]);
    this.setState(prevState => ({
      ...prevState,
      order: {
        ...prevState.order,
        cupcakes: newCupcakesState
      }
    }));
  }


  handleDeliveryTimeSelect = (date) => {
    this.setState({
      deliveryTime: date
    });
  }

  placeOrder = () => {
    // this.props.placeOrder();
  }

  render() {
    return (
      <Tabs>
     <TabList>
        {/* <Tab>React</Tab> */}
        <Tab>Cupcake Customization</Tab>
        <Tab>Cupcake Order Management</Tab>
      </TabList>
      <TabPanel className='tab-panel__customization'>
        <Customization 
        bases={this.props.bases}
        frostings={this.props.frostings}
        toppings={this.props.toppings}
        cupcake={this.state.cupcake}
        cupcakes={this.state.order.cupcakes}
        selectBase={this.selectBase}
        selectFrosting={this.selectFrosting}
        selectToppings={this.selectToppings}
        addCupcake={this.addCupcake}
        handleDeliveryTimeSelect={this.handleDeliveryTimeSelect}
        deliveryTime={this.state.deliveryTime}
        placeOrder={this.placeOrder}
        />
      </TabPanel>
      <TabPanel>
        <OrderManagement/>
      </TabPanel>
      </Tabs>
    );
  }
}

export function mapStateToProps (state) {
  return {
    bases: state.customization.bases,
    frostings: state.customization.frostings,
    toppings: state.customization.toppings
  }
}

export function mapDispatchToProps (dispatch) {
  return {
      fetchBases: () => dispatch(fetchBases()),
      fetchFrostings: () => dispatch(fetchFrostings()),
      fetchToppings: () => dispatch(fetchToppings()),
      // placeOrder: () => dispatch(placeOrder())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
