import {RECEIVE_DATA} from "constant/ActionType";
import UserService from "service/demo-service/UserService";

const _userService = new UserService();

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        list: data
    }
}

export function fetchData() {
    return (dispatch) => {
        _userService.getUserList().then(res => {
            dispatch(receiveData(res.data))
        })
    }
}