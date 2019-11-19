import { actionTypes as customizationActionTypes } from '../actions/CustomizationActions';
import _ from 'lodash';

const defaultState = {
    bases: [],
    frostings: [],
    toppings: [],
    basesError: {}
};

export default function customizationReducer (state = defaultState, action) {
    const newState = _.cloneDeep(state);

    switch (action.type) {
    case customizationActionTypes.FETCH_BASES_SUCCEEDED:
        console.log('in customizationReducer, FETCH_BASES_SUCCEEDED, action.data = ', action.data);
        newState.bases = action.data;
        break;
    case customizationActionTypes.FETCH_FROSTINGS_SUCCEEDED:
        newState.frostings = action.data;
        break;
    case customizationActionTypes.FETCH_TOPPINGS_SUCCEEDED:
        newState.toppings = action.data;
        break;
    case customizationActionTypes.PLACE_ORDER_SUCCEEDED:
        console.log('in customizationReducer.js, PLACE_ORDER_SUCCEEDED');
        break;
    case customizationActionTypes.PLACE_ORDER_FAILED:
        console.log('in customizationReducer.js, PLACE_ORDER_FAILED with action = ', action);
        break;
    default: 
        console.warn('in customizationReducer, no case found for action: ', action.type);
    }
    return newState;
}
        