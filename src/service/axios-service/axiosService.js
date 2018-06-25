import axios from 'axios';
import {toastr} from "react-redux-toastr";

//import LoginUser from "service/login-service/LoginUser";

Promise.polyfill();

const axiosService = axios.create();
//const _loginUser = new LoginUser();

axiosService.defaults.timeout = 5000;
axiosService.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axiosService.interceptors.request.use(
    (config) => {
        if (config.data && config.data.$skipAuthHandler) {
            config.$skipAuthHandler = true;
            delete config.data.$skipAuthHandler;
        }
        if (config.params && config.params.$skipAuthHandler) {
            config.$skipAuthHandler = true;
            delete config.params.$skipAuthHandler;
        }
        //config.headers.Authorization = _loginUser.getAuthorization();
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

axiosService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const err = error.response;
        if (err.status === 401 && !! err.config && !err.config.$skipAuthHandler) {
            //_loginUser.clear();
            window.location = '/unauthorization';
        }
        toastr.error(err.data.message);
        return Promise.reject(error);
    }
);

export default axiosService;