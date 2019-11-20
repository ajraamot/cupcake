import React from 'react';
import '../styles/OrderManagement.css';

class OrderManagement extends React.Component {
    componentDidMount = () => {
        this.props.fetchOrders();
    }

    getOrders = () => {
        this.props.fetchOrders();
    }

    renderCupcakeDetails = (cupcake, index) => {
        return <tr key='index'>
                <td>{cupcake.base.name}</td>
                <td>{cupcake.frosting.name}</td>
                <td>{cupcake.toppings.reduce((all, current) => {return all += current.name + ', '}, '')}</td>
        </tr>

    }

    render() {
        return <div>
            <h1>Order Management</h1>
            <table border='1' className='order-management__table'>
                <th><td>Base</td><td>Frosting</td><td>Toppings</td></th>
                {this.props.orders ? this.props.orders.map((order, index) => <tr key={index}>
                <td>{order.delivery_date}</td>
                {order.cupcakes.map((cupcake) => this.renderCupcakeDetails(cupcake))}
                </tr>) : <span>No orders</span>}

            </table>
            <button className='customization__button' onClick={this.getOrders}>Fetch Orders</button>
        </div>
    }
}

export default OrderManagement;


/*
Create a screen where users can monitor their existing orders.

        The user should be displayed their orders in a table ordered by delivery time, soonest first, by default.
        
        The user should be able to sort orders by delivery time, either ascending, or descending.
        
        The user should be able to filter orders by cupcake component.
*/