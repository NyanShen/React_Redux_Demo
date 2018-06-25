let authorization = undefined;

export default class AuthorizationService {

    encodeNonASC(str) {
        return /^[\x00-\x7F]*$/.test(str) ? str : encodeURIComponent(str);
    }

    get() {
        return authorization;
    }

    clear() {
        authorization = undefined;
    }

    basic(username, password) {
        if(arguments.length === 2) {
            authorization = 'Basic' + btoa(this.encodeNonASC(username) + ':' + this.encodeNonASC(password));
        }
        return authorization;
    }

    token(token) {
        if (arguments.length === 1) {
            authorization = 'Token' + token;
        }
        return authorization;
    }
}