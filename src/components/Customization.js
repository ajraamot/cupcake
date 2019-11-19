import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../styles/Customization.css';

class Customization extends React.Component {    
    renderBase = () => {
        const baseTypes = this.props.bases; 
        return <div className='customization__card'>
             <div className='customization__card-title'>Step 1: Choose the base...</div>
                {baseTypes.map((base, index) => 
                    <React.Fragment key={base.key}>
                        <input 
                        type="radio"  
                        name="base" 
                        value={base.key}
                        onChange={this.props.selectBase}
                        checked={baseTypes[index].key === this.props.cupcake.base.key}
                        /> {base.name}
                        <span className='customization__card-price'>{this.formatPrice(base.price)}</span><br/>
                    </React.Fragment>)}
            </div>;
    }
    renderFrosting = () => {
        const frostingTypes = this.props.frostings;
        return <div className='customization__card'>
            <div className='customization__card-title'>Step 2: Choose the frosting...</div>
            {frostingTypes.map((frosting, index) => 
                    <React.Fragment key={frosting.key}>
                        <input 
                        type="radio"
                        name="frosting" 
                        value={frosting.key} 
                        onChange={this.props.selectFrosting} 
                        checked={frostingTypes[index].key === this.props.cupcake.frosting.key}
                        /> {frosting.name}
                        <span className='customization__card-price'>{this.formatPrice(frosting.price)}</span><br/>
                    </React.Fragment>)}
            </div>;
    }
    renderToppings = () => {
        const toppingTypes = this.props.toppings;
        return <div className='customization__card'>
            <div className='customization__card-title'>Step 3: Choose the toppings...</div>
            {toppingTypes.map((topping, index) => 
                    <React.Fragment key={topping.key}>
                        <input 
                        type="checkbox" 
                        name="toppings" 
                        value={topping.key} 
                        onChange={this.props.selectToppings} 
                        checked={this.props.cupcake.toppings.map(obj => obj.key).includes(topping.key)}
                        /> {topping.name}
                        <span className='customization__card-price'>{this.formatPrice(topping.price)}</span><br/>
                    </React.Fragment>)}
            </div>;
    }
    renderCupcakeSummary = () => {
        const toppingTotal = this.props.cupcake.toppings.reduce((total, current) => { return total += current.price }, 0);
        const subTotal = this.props.cupcake.base.price + this.props.cupcake.frosting.price + toppingTotal;
        return <div className='customization__card-summary'>
            <div className='customization__card-title'>Cupcake Summary</div>
            <div>Base: {this.props.cupcake.base.name} {this.formatPrice(this.props.cupcake.base.price)}</div>
            <div>Frosting: {this.props.cupcake.frosting.name} {this.formatPrice(this.props.cupcake.frosting.price)}</div>
            <div>Toppings: {this.props.cupcake.toppings.map(topping => <div key={topping.name}>{topping.name}: {this.formatPrice(topping.price)}</div>)}</div>
            <div>Cupcake Total: {this.formatPrice(subTotal)}</div>
            <button className='customization__button' onClick={this.props.addCupcake}>Add Cupcake to Order</button>

        </div>
    }

    getCupcakePrice = (cupcake) => {
        return cupcake.base.price + cupcake.frosting.price + cupcake.toppings.reduce((total, current) => { return total += current.price }, 0);
    }

    renderCupcakesList = () => {
        return <React.Fragment>
            {this.props.cupcakes && this.props.cupcakes.map((cupcake, index) => {
                return <React.Fragment key={index}>
                    <div className='customization__summary-text--bold'>Cupcake #{index + 1} {this.formatPrice(this.getCupcakePrice(cupcake))}</div>
                    <div>Base: {cupcake.base.name}</div>
                    <div>Frosting: {cupcake.frosting.name}</div>
                    <div>Toppings: {cupcake.toppings.map(topping => <span key={topping.name}>{topping.name}, </span>)}</div>
            </React.Fragment>})}
          </React.Fragment>;
    }

    renderOrderSummary = () => {
        const subTotal = this.props.cupcakes.reduce((total, cupcake) => { return total += this.getCupcakePrice(cupcake)}, 0);
        const delivery = 150;
        const tax = 0.0875 * (subTotal + delivery) 
        return <div className='customization__card-summary'>
            <div className='customization__card-title'>Order Summary</div>
            {this.renderCupcakesList()}
            <div className='customization__summary-text--bold'>SubTotal: {this.formatPrice(subTotal)}</div>
            <div>Delivery: {this.formatPrice(delivery)}</div>
            <div>Tax (IL = 8.75%): {this.formatPrice(tax)}</div>
            <div className='customization__summary-text--bold'>Total: {this.formatPrice(subTotal + delivery + tax)}</div>

            <div className='customization__card-title'>Please schedule a delivery time:</div>
            <DatePicker
                selected={this.props.deliveryDate}
                minDate={moment().add(1, 'days').toDate()}
                dateFormat={'MMM d, hh:mma'}
                showTimeSelect
                onSelect={this.props.handleDeliveryDateSelect}
                onChange={this.props.handleDeliveryDateSelect}
            />
            <div/>
            <button className='customization__button' onClick={this.props.placeOrder}>Place Order</button>

        </div>
    }

    formatPrice = (price) => {
        return '$' + ((price/100).toFixed(2));
      }
    

    render() {
        return <div className='customization__page'>
            <h1>Create your Cupcake in three easy steps!</h1>
            <div className='customization__card-container'>
                {this.renderBase()}
                {this.renderFrosting()}
                {this.renderToppings()}
            </div>
            <div className='customization__card-container'>
                {this.renderCupcakeSummary()}
                {this.renderOrderSummary()}
            </div>
        </div>;
    }
}

export default Customization;