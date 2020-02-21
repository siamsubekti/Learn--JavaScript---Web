


const defaultState = {
    number: [],
    
}


function CounterReducer(state = defaultState, action) {
    const { type, counterIndex} = action;

    switch (type) {
        case 'INCREMENT':
            return { ...state, number: state.number.map((value, index) => {
                if (index === counterIndex){
                    return value +1;
                } else {
                    return value;
                }
            }) };
        case 'DECREMENT':
            return { ...state, number: state.number.map((value, index)=> {
                if (index === counterIndex) {
                    return value -1;
                } else {
                    return value;
                }
            }) };
        case 'RESET':
                return { ...state, number: state.number.map((value, index)=> {
                    if (index === counterIndex) {
                        return value=0;
                    } else {
                        return value;
                    }
                }) };
        case 'ADD_COUNTER':
            return { ...state, number: state.number.concat([0]) };
        case 'CLEAR_COUNTER':
            return { ...state, number: [] }
        case 'DELETE_COUNTER':
                //cara pertama :
                // return{...state, number: state.number.filter((el,index) => index!==counterIndex)}       
                
                //cara kedua :
                const newState = {...state};
                newState.number.splice(counterIndex,1)             
                
                return{...state, counterIndex:[...state.number]}
        default:
            return state;
    }
}

export default CounterReducer;