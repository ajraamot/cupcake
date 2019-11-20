import { call, put } from 'redux-saga/effects';
import {
    fetchOrdersSucceeded, 
    fetchOrdersFailed
 } from '../actions/OrderManagementActions';
import OrderManagementApiClient from '../apiClients/OrderManagementApiClient';

export function * watchFetchOrders () {
    try {
        const response = yield call(OrderManagementApiClient.getOrders);

        const orders = response.data.orders;

        yield put(fetchOrdersSucceeded(orders));
    } catch (error) {
        yield put(fetchOrdersFailed(error.data));
    }
}

export const orderManagementSagas = [
    watchFetchOrders
];