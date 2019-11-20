import { call, put, takeEvery } from 'redux-saga/effects';
import {
    actionTypes,
    fetchBasesSucceeded, 
    fetchBasesFailed,
    fetchFrostingsSucceeded, 
    fetchFrostingsFailed,
    fetchToppingsSucceeded, 
    fetchToppingsFailed,
    placeOrderSucceeded,
    placeOrderFailed
 } from '../actions/CustomizationActions';
import CustomizationApiClient from '../apiClients/CustomizationApiClient';

export function * watchFetchBases () {
    try {
        const response = yield call(CustomizationApiClient.getCupcakesBases);

        const bases = response.data.bases;

        yield put(fetchBasesSucceeded(bases));
    } catch (error) {
        yield put(fetchBasesFailed(error.data));
    }
}

export function * watchFetchFrostings () {
    try {
        const response = yield call(CustomizationApiClient.getCupcakesFrostings);

        const frostings = response.data.frostings;

        yield put(fetchFrostingsSucceeded(frostings));
    } catch (error) {
        yield put(fetchFrostingsFailed(error.data));
    }
}

export function * watchFetchToppings () {
    try {
        const response = yield call(CustomizationApiClient.getCupcakesToppings);

        const toppings = response.data.toppings;

        yield put(fetchToppingsSucceeded(toppings));
    } catch (error) {
        yield put(fetchToppingsFailed(error.data));
    }
}

export function * watchPlaceOrder () {
    yield takeEvery(actionTypes.PLACE_ORDER_REQUESTED, placeOrder);
}

export function * placeOrder (payload) {
    try {
        yield call(CustomizationApiClient.placeOrder, payload.order);

        yield put(placeOrderSucceeded());
    } catch (error) {
        yield put(placeOrderFailed(error.data));
    }
}

export const customizationSagas = [
    watchFetchBases,
    watchFetchFrostings,
    watchFetchToppings,
    watchPlaceOrder
];