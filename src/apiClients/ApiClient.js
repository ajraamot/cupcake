import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';

export default class ApiClient {
    static get (path, headers) {
        return axios.get(path, headers);
    }

    static post (path, data, headers) {
        return axios.post(path, data, headers);
    }
}