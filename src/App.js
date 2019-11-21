import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Customization from './components/Customization';
import OrderManagement from './components/OrderManagement';
import { fetchBases, fetchFrostings, fetchToppings, placeOrder } from './actions/CustomizationActions';
import { fetchOrders } from './actions/OrderManagementActions';

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
      order: {
        cupcakes: [],
        delivery_date: moment().add(1, 'days').toDate()
      },
      orderStatus: null,
      ascendingSort: true,
      filterText: ''
    };
  }

  fetchCupcakeComponents = () => {
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


  handleDeliveryDateSelect = (date) => {
    this.setState(prevState => ({
      ...prevState,
      order: {
        ...prevState.order,
        delivery_date: date
      }
    }));
  }

  placeOrder = () => {
    this.props.placeOrder(this.state.order);
  }

  fetchOrders = () => {
    this.props.fetchOrders();
  }

  filterByBase = (event) => {
    this.setState({
        filterText: event.target.value
    });
  }
    
  applySort = (a, b) => {
    let returnValue
    if (this.state.ascendingSort) {
          returnValue = (a.delivery_date > b.delivery_date) ? 1 : -1
    } else {
          returnValue = (a.delivery_date < b.delivery_date) ? 1 : -1
    }
    return returnValue;
  }

  toggleSortDirection = () => {
    this.setState({
        ascendingSort: !this.state.ascendingSort
    })
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
        fetchCupcakeComponents={this.fetchCupcakeComponents}
        bases={this.props.bases}
        frostings={this.props.frostings}
        toppings={this.props.toppings}
        cupcake={this.state.cupcake}
        cupcakes={this.state.order.cupcakes}
        selectBase={this.selectBase}
        selectFrosting={this.selectFrosting}
        selectToppings={this.selectToppings}
        addCupcake={this.addCupcake}
        handleDeliveryDateSelect={this.handleDeliveryDateSelect}
        deliveryDate={this.state.order.delivery_date}
        placeOrder={this.placeOrder}
        orderStatus={this.props.orderStatus}
        />
      </TabPanel>
      <TabPanel>
        <OrderManagement
        fetchOrders={this.fetchOrders}
        // orders={this.props.orders}
        orders={this.props.orders.sort((a, b) => this.applySort(a, b))}
        filterByBase={this.filterByBase}
        applySort={this.applySort}
        toggleSortDirection={this.toggleSortDirection}
        ascendingSort={this.state.ascendingSort}
        filterText={this.state.filterText}
        />
      </TabPanel>
      </Tabs>
    );
  }
}

export function mapStateToProps (state) {
  return {
    bases: state.customization.bases,
    frostings: state.customization.frostings,
    toppings: state.customization.toppings,
    orderStatus: state.customization.orderStatus,
    orders: state.orderManagement.orders
  }
}

export function mapDispatchToProps (dispatch) {
  return {
      fetchBases: () => dispatch(fetchBases()),
      fetchFrostings: () => dispatch(fetchFrostings()),
      fetchToppings: () => dispatch(fetchToppings()),
      placeOrder: (order) => dispatch(placeOrder(order)),
      fetchOrders: () => dispatch(fetchOrders())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
