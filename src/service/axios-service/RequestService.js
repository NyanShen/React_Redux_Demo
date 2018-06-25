import axiosService from 'service/axios-service/axiosService';

Promise.polyfill();

export default class RequestService {
    axiosRequest(param) {
        return new Promise((resolve, reject) => {
            axiosService.request({
                url: param.url || '',
                method: param.method || 'GET',
                responseType: param.responseType || 'json',
                data: param.data || null,
                params: param.params || '',
            }).then(res => {
                typeof resolve === 'function' && resolve(res);
            }).catch(error => {
                typeof reject === 'function' && reject(error);
            })
        })
    }
}