const { createStore } = require('redux');

const previousState = {
    users: []
}

function userReducer(state = previousState, action) {
    const {type, user} = action;

    switch (type) {
        case 'INSERT_USER':
            return {...state, users: state.users.concat([user]) };
        
        default:
            return state;
    }
}

const store = createStore(userReducer);
const user ={
    id: 1,
    name: 'Fiqri',
    email: 'fiqri@emails.com',
};


store.dispatch({ type: 'INSERT_USER', user,user:{...user.age=19} });


console.log('previousState:', previousState);
console.log('state:', store.getState());