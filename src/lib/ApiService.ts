import axios, { AxiosRequestConfig } from "axios";
import Constants from 'lib/Constants';
import Cookies from 'lib/utils/Cookies';
import { getLogger } from 'lib/utils/logging';

const { log, warn } = getLogger('ApiService', { color: 'black', enabled: false });

const DEFAULT_TASK_POLL_INTERVAL_MS = 1000;

// Todo: abstract this so it's not confined to only domain requests.
const instance = axios.create({
    baseURL: process.env.API_URL
});

export const updateAuthToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// TODO: add these agents as optional istances for keepAlive requests, or just use fetch?
//const httpAgent = new http.Agent({ keepAlive: true });
//const httpsAgent = new https.Agent({ keepAlive: true });

// const keepAliveInstance = axios.create({
//     baseURL: process.env.API_URL,
//     httpAgent,
//     httpsAgent,
// });

instance.interceptors.request.use(request => {
    log('Request:::', request);
    const token = Cookies.get(Constants.ACCESS_TOKEN);
    if (token) request.headers['Authorization'] = `Bearer ${token}`;
    //request.headers['Content-Type'] = 'application/json';
    return request;
})

instance.interceptors.response.use(response => {
    //log('%c Response:::', 'background: #222; color: #bada55', response);
    return response.data;
})

export default {

    get: async (url, config?: AxiosRequestConfig): Promise<any> => {
        try {
            //if (external) {
            log('GET', url);
            return instance.get(url, config);
            // } else {
            //     return await instance.get(url);
            // }
        } catch (e) {
            if (e.message && e.message.indexOf('Network Error') >= 0) {
                //EventService.dispatch(AppEvents.NETWORK_NOT_REACHABLE);
            }
            throw e;
        }
    },

    post: async (url, data, config?: AxiosRequestConfig): Promise<any> => {
        try {
            log('POST', url, data);
            return instance.post(url, data, config);
        } catch (e) {
            if (e.message && e.message.indexOf('Network Error') >= 0) {
                //EventService.dispatch(AppEvents.NETWORK_NOT_REACHABLE);
            }
            throw e;
        }
    },

    put: async (url, data) => {
        try {
            log('PUT', url, data);
            return instance.put(url, data)
        } catch (e) {
            if (e.message && e.message.indexOf('Network Error') >= 0) {
                //EventService.dispatch(AppEvents.NETWORK_NOT_REACHABLE);
            }
            throw e;
        }
    },

    patch: async (url, data, config?: AxiosRequestConfig): Promise<any> => {
        try {
            log('PATCH', url, data, config);
            return instance.patch(url, data, config);
        } catch (e) {
            if (e.message && e.message.indexOf('Network Error') >= 0) {
                //EventService.dispatch(AppEvents.NETWORK_NOT_REACHABLE);
            }
            throw e;
        }
    },

    delete: async (url, data?) => {
        try {
            log('DELETE', url);
            return instance.post(url, data)
        } catch (e) {
            if (e.message && e.message.indexOf('Network Error') >= 0) {
                //EventService.dispatch(AppEvents.NETWORK_NOT_REACHABLE);
            }
            throw e;
        }
    }
};