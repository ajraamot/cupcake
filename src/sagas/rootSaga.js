import { all, fork } from 'redux-saga/effects';
import _ from 'lodash';


import { customizationSagas } from './customizationSagas';
import { orderManagementSagas } from './orderManagementSagas';

export default function * rootSaga () {
    const sagas = _.concat([], customizationSagas, orderManagementSagas);
    yield all(sagas.map(saga => fork(saga)));
    // yield _.map(sagas, (saga) => fork(saga));
}