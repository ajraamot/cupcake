export const actionTypes = {
    FETCH_ORDERS_REQUESTED: 'FETCH_ORDERS_REQUESTED',
    FETCH_ORDERS_SUCCEEDED: 'FETCH_ORDERS_SUCCEEDED',
    FETCH_ORDERS_FAILED: 'FETCH_ORDERS_FAILED'
};

export const fetchOrders = () => ({ type: actionTypes.FETCH_ORDERS_REQUESTED });
export const fetchOrdersSucceeded = orders => ({ type: actionTypes.FETCH_ORDERS_SUCCEEDED, orders });
export const fetchOrdersFailed = error => ({ type: actionTypes.FETCH_ORDERS_FAILED, error });
