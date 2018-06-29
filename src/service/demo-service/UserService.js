import RequestService from "service/axios-service/RequestService";

const _requestService = new RequestService();

export default class UserService {
    getUserList () {
        return _requestService.axiosRequest({
            url: "/api/user",
            method: "GET",
            params: {
                username: "nick"
            }
        })
    }
}