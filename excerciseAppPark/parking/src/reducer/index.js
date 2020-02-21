import { CREATE_PARK, 
         PARK_VEHICLE,
         LEAVE_VEHICLE,
         PARK_STATUS } from "../constants/ActionsTypes";

const initalState = {
    parkSlot : [],
    vehicle : [],
    status : [],
};

function parkingRoot(state = initalState, actions){
    switch (actions.type) {
        case CREATE_PARK:
            return{
                ...state, parkSlot: state.parkSlot.concat(actions.payload)
            };
        
        case PARK_VEHICLE:
            return{
                ...state, vehicle: state.vehicle.concat(actions.payload)
            };
            
        case LEAVE_VEHICLE:
            (state, actions) => ({
                    ...state, vehicle: state.vehicle.filter((item, index) => index !== actions.index )
            });
            return state.vehicle;

        case PARK_STATUS :
            return{
                ...state, status: state.status.concat(actions.payload)
            };

        default:
            return state;
    }
}

export default parkingRoot;