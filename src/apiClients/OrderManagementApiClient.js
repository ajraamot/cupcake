import ApiClient from './ApiClient';

export default class OrderManagementApiClient {
    static getOrders () {
        return ApiClient.get('/cupcakes/orders');
    }
}