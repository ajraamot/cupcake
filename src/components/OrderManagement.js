import React from 'react';
import '../styles/OrderManagement.css';

class OrderManagement extends React.Component {
    componentDidMount = () => {
        this.props.fetchOrders();
    }

    getOrders = () => {
        this.props.fetchOrders();
    }

    renderCupcakeBase = (cupcake, index) => {
        return <table>
            <tbody>
                <tr key={index + cupcake.base.name}>
                    <td>{cupcake.base.name}</td>
               </tr>
            </tbody>
        </table>
    }

    renderCupcakeFrosting = (cupcake, index) => {
        return <table>
            <tbody>
                <tr key={index + cupcake.frosting.name}>
                    <td>{cupcake.frosting.name}</td>
                </tr>
            </tbody>
        </table> 
    }

    renderCupcakeToppings = (cupcake, index) => {
        return <table>
            <tbody>
                <tr key={index}>
                    <td>{cupcake.toppings.reduce((all, current) => {return all += current.name + ', '}, '')}</td>
                </tr>
            </tbody>
        </table>
    }

    render() {
        return <div>
            <h1>Order Management</h1>
            {/* <button className='customization__button' onClick={() => this.getOrders()}>Refresh List</button> */}
            <table border='1' className='order-management__table'>
                <thead>
                    <tr>
                        <th onClick={this.props.toggleSortDirection}>Delivery Date<br/>(click to toggle) {this.props.ascendingSort ? '⇧' : '⇩'}</th>
                        <th>Base<br/><input placeholder='filter by base' onChange={this.props.filterByBase}/></th>
                        <th>Frosting</th>
                        <th>Toppings</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.orders ? this.props.orders
                    .sort((a, b) => this.applySort)
                    .filter(obj => obj.cupcakes[0].base.name.includes(this.props.filterText) )
                    .map((order, index) => <tr key={order.id}>
                <td rowpan={order.cupcakes.length}>{order.delivery_date}</td>
                <td>
                    {/* {order.cupcakes.map((cupcake) => this.renderCupcakeDetails(cupcake))} */}
                    {order.cupcakes.map((cupcake, i) => this.renderCupcakeBase(cupcake, i))}
                </td>
                <td>
                    {/* {order.cupcakes.map((cupcake) => this.renderCupcakeDetails(cupcake))} */}
                    {order.cupcakes.map((cupcake, i) => this.renderCupcakeFrosting(cupcake, i))}
                </td>
                <td>
                    {/* {order.cupcakes.map((cupcake) => this.renderCupcakeDetails(cupcake))} */}
                    {order.cupcakes.map((cupcake, i) => this.renderCupcakeToppings(cupcake, i))}
                </td>
                </tr>) : <span>No orders</span>}
                </tbody>
            </table>
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