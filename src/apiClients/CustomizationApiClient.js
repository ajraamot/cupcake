import ApiClient from './ApiClient';

export default class CustomizationApiClient {
    static getCupcakesBases () {
        return ApiClient.get('/cupcakes/bases');
    }

    static getCupcakesFrostings () {
        return ApiClient.get('/cupcakes/frostings');
    }

    static getCupcakesToppings () {
        return ApiClient.get('/cupcakes/toppings');
    }

    static placeOrder (order) {
        return ApiClient.post('/cupcakes/orders', order);
    }
}