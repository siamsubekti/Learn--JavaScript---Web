import { alertConstants } from "../Contants";

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCES, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message};
}

function clear() {
    return { type: alertConstants.CLEAR };
}