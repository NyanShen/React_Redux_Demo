import {RECEIVE_DATA} from "constant/ActionType";
import MessageService from "service/demo-service/MessageService";

const _messageService = new MessageService();

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        list: data
    }
}

export function fetchData() {
    return (dispatch) => {
        _messageService.getMessage().then(res => {
            dispatch(receiveData(res.data))
        })
    }
}