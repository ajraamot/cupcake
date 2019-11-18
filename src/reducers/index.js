// the root reducer
import {combineReducers} from 'redux';
import customization from './customizationReducer';
// 'customization' defined here is an alias that I will use through the app (state.customization)

const rootReducer = combineReducers({
  customization
});   // add any other reducers in here

export default rootReducer;
