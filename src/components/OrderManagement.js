import React from 'react';

class OrderManagement extends React.Component {
    componentDidMount = () => {
        this.props.fetchOrders()
    }

    // componentDidMount(this.props.getOrders);
    render() {
        return <div></div>
    }
}

export default OrderManagement;


/*
Create a screen where users can monitor their existing orders.

        The user should be displayed their orders in a table ordered by delivery time, soonest first, by default.
        
        The user should be able to sort orders by delivery time, either ascending, or descending.
        
        The user should be able to filter orders by cupcake component.
*/