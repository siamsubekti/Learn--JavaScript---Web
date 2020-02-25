import { alertConstants } from "../Contants";

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCES:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}