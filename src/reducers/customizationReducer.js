import { orderStatus } from '../constants/constants';
import { actionTypes as customizationActionTypes } from '../actions/CustomizationActions';
import _ from 'lodash';


const defaultState = {
    bases: [],
    frostings: [],
    toppings: [],
    basesError: {},
    orderStatus: orderStatus.NOT_PLACED,
};

export default function customizationReducer (state = defaultState, action) {
    const newState = _.cloneDeep(state);
    switch (action.type) {
    case customizationActionTypes.FETCH_BASES_SUCCEEDED:
        newState.bases = action.data;
        break;
    case customizationActionTypes.FETCH_FROSTINGS_SUCCEEDED:
        newState.frostings = action.data;
        break;
    case customizationActionTypes.FETCH_TOPPINGS_SUCCEEDED:
        newState.toppings = action.data;
        break;
    case customizationActionTypes.PLACE_ORDER_REQUESTED:
        newState.orderStatus = orderStatus.PENDING;
        break;
    case customizationActionTypes.PLACE_ORDER_SUCCEEDED:
        newState.orderStatus = orderStatus.SUCCEEDED;
        break;
    case customizationActionTypes.PLACE_ORDER_FAILED:
        newState.orderStatus = orderStatus.FAILED;
        break;
    case customizationActionTypes.FETCH_BASES_REQUESTED:
    case customizationActionTypes.FETCH_FROSTINGS_REQUESTED:
    case customizationActionTypes.FETCH_TOPPINGS_REQUESTED:
        // TODO: Maybe set a loading state to true
        break;
    default: 
        break;
    }
    return newState;
}
        