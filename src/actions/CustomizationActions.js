export const actionTypes = {
    FETCH_BASES_REQUESTED: 'FETCH_BASES_REQUESTED',
    FETCH_BASES_SUCCEEDED: 'FETCH_BASES_SUCCEEDED',
    FETCH_BASES_FAILED: 'FETCH_BASES_FAILED',
    FETCH_FROSTINGS_REQUESTED: 'FETCH_FROSTINGS_REQUESTED',
    FETCH_FROSTINGS_SUCCEEDED: 'FETCH_FROSTINGS_SUCCEEDED',
    FETCH_FROSTINGS_FAILED: 'FETCH_FROSTINGS_FAILED',
    FETCH_TOPPINGS_REQUESTED: 'FETCH_TOPPINGS_REQUESTED',
    FETCH_TOPPINGS_SUCCEEDED: 'FETCH_TOPPINGS_SUCCEEDED',
    FETCH_TOPPINGS_FAILED: 'FETCH_TOPPINGS_FAILED',
};

export const fetchBases = () => ({ type: actionTypes.FETCH_BASES_REQUESTED });
export const fetchBasesSucceeded = data => ({ type: actionTypes.FETCH_BASES_SUCCEEDED, data });
export const fetchBasesFailed = error => ({ type: actionTypes.FETCH_BASES_FAILED, error });

export const fetchFrostings = () => ({ type: actionTypes.FETCH_FROSTINGS_REQUESTED });
export const fetchFrostingsSucceeded = data => ({ type: actionTypes.FETCH_FROSTINGS_SUCCEEDED, data });
export const fetchFrostingsFailed = error => ({ type: actionTypes.FETCH_FROSTINGS_FAILED, error });

export const fetchToppings = () => ({ type: actionTypes.FETCH_TOPPINGS_REQUESTED });
export const fetchToppingsSucceeded = data => ({ type: actionTypes.FETCH_TOPPINGS_SUCCEEDED, data });
export const fetchToppingsFailed = error => ({ type: actionTypes.FETCH_TOPPINGS_FAILED, error });