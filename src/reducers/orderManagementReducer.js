import { actionTypes } from '../actions/OrderManagementActions';
import _ from 'lodash';

const defaultState = {
    orders: []
};

export default function orderManagementReducer (state = defaultState, action) {
    const newState = _.cloneDeep(state);
    switch (action.type) {
    case actionTypes.FETCH_ORDERS_REQUESTED:
        break;
    case actionTypes.FETCH_ORDERS_SUCCEEDED:
        newState.orders = action.orders;
        break;
    case actionTypes.FETCH_ORDERS_FAILED:
        break;
    default: 
        break;
    }
    return newState;
}
        