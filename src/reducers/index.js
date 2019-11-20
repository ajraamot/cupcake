// the root reducer
import {combineReducers} from 'redux';
import customization from './customizationReducer';
import orderManagement from './orderManagementReducer';
// 'customization' defined here is an alias that I will use through the app (state.customization)

const rootReducer = combineReducers({
  customization,
  orderManagement
});

export default rootReducer;
