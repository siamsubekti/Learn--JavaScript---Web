const { createStore } = require ('redux');

const previousState = {
    counters: []
};

function counterReducer(state = previousState, action) {
    const { type, counterIndex } = action;

    switch (type) {
        case 'ADD_COUNTER':
            return {...state, counters: state.counters.concat([0])};
        case 'INCREMENT':
            return {...state, counters: state.counters.map((value, index) => {
                if(index === counterIndex){
                    return value +1;
                }else{
                    return value
                };
            })};
        case 'DECREMENT':
            const result = {...state, counters: state.counters.map((value, index) => 
                counterIndex === index ? value -1 : value //operator ternary, true , false
            )};
            return result;
        default:
            return state;
    }
}

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log('Newstate:', store.getState());
});


store.dispatch({type: 'ADD_COUNTER'});
store.dispatch({type: 'ADD_COUNTER'});
store.dispatch({type: 'ADD_COUNTER'});
store.dispatch({type: 'INCREMENT', counterIndex:1});
store.dispatch({type: 'INCREMENT', counterIndex:2});
store.dispatch({type: 'DECREMENT', counterIndex:0});

// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'DECREMENT'});

// console.log('previousState:', previousState);