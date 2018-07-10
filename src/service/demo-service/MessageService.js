import RequestService from "service/axios-service/RequestService";

const _requestService = new RequestService();

export default class MessageService {

    getMessage () {
        return _requestService.axiosRequest({
            url: "/api/message",
            method: "GET"
        })
    }
}