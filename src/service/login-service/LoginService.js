Promise.polyfill();

import RequestService from "service/axios-service/RequestService";
import AuthorizationService from "service/login-service/AuthorizationService";

const _requestService = new RequestService();
const _authorizationService = new AuthorizationService();

export default class LoginService {
    login(loginInfo) {
        _authorizationService.basic(loginInfo.username, loginInfo.password);
        return new Promise((resolve, reject) => {
            _requestService.axiosRequest({
                url: '/api/tokens',
                method: 'POST',
                data: {
                    $skipAuthHandler: true
                }
            }).then(res => {
                _authorizationService.token(res.data.id);
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    logout(token) {
        return _requestService.axiosRequest({
            url: '/api/tokens/' + token,
            method: 'DELETE'
        })
    }
}