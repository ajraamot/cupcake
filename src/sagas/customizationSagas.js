import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBasesSucceeded, 
    fetchBasesFailed,
    fetchFrostingsSucceeded, 
    fetchFrostingsFailed,
    fetchToppingsSucceeded, 
    fetchToppingsFailed } from '../actions/CustomizationActions';
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

export const customizationSagas = [
    watchFetchBases,
    watchFetchFrostings,
    watchFetchToppings,
];