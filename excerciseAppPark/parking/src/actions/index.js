import { CREATE_PARK, 
        PARK_VEHICLE,
        LEAVE_VEHICLE,
        PARK_STATUS } from "../constants/ActionsTypes";

export function createPark(payload) {
    return {type: CREATE_PARK, payload};
}

export function park(payload){
    return {type: PARK_VEHICLE, payload};
}

export function leave(payload) {
    return {type: LEAVE_VEHICLE, payload};
}

export function status(payload){
    return {type: PARK_STATUS, payload};
}