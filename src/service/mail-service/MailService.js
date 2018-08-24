import RequestService from "service/axios-service/RequestService";

const _requestService = new RequestService();

export default class MailService {
    getMailList (params) {
        return _requestService.axiosRequest({
            url: "/api/mail/INBOX",
            method: "GET",
            params: params
        })
    }
}