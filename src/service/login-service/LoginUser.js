import _ from "lodash";

import AuthorizationService from "service/login-service/AuthorizationService";

const localStorage = window.localStorage;
const _authorizationService = new AuthorizationService();
let currentUser = null;

export default class LoginUser {

    getLoginUser() {
        const localStorageUser = localStorage.getItem('currentUser');
        if (localStorageUser) {
            const storageUser = JSON.parse(atob(localStorageUser));
            storageUser.fullName = decodeURIComponent(storageUser.fullName || '');
            currentUser = storageUser;
            return currentUser;
        }
    }

    getUser() {
        return this.getLoginUser();
    }

    hasLogin() {
        return !!this.getLoginUser();
    }

    persistUser(response) {
        currentUser = {
            token: response.id,
            id: response.user.id,
            username: response.user.username,
            fullName: response.user.fullName,
            state: response.user.state
        };
        currentUser.fullName = encodeURIComponent(currentUser.fullName || '');
        const btoAUser = btoa(JSON.stringify(currentUser));
        localStorage.setItem('currentUser', btoAUser);
    }

    authorization() {
        if (_authorizationService.get()) {
            return _authorizationService.get();
        }

        const currentUser = this.getLoginUser();

        if (_.isEmpty(currentUser)) {
            return undefined;
        }

        if (currentUser.token) {
            return _authorizationService.token(currentUser.token);
        }

        return undefined;
    }

    clear() {
        currentUser =null;
        localStorage.clear();
        _authorizationService.clear();
    }
}