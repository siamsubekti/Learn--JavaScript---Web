const { createStore } = require('redux');

const previousState = {
    users: [],
    Animal: [],
    PageTitle: ''
};

function userReducer(state = previousState, action) {
    const { type, user, name, email, age, animal, title } = action;

    switch (type) {
        case 'INSERT_USER':
            return {...state, users: state.users.concat([user]) };

        case 'INSERT_ANIMAL':
            return {...state, Animal: state.Animal.concat([animal]) };

        case 'UPDATE_ANIMAL':
            return {...state, Animal: state.Animal.map((value, index) => {
                    if (index === state.Animal.indexOf(animal)) {
                        if (name) {
                            value.name = name;
                        }
                        return value;
                    } else {
                        return value;
                    }
                })
            };

        case 'UPDATE_TITLE':
            return { ...state, PageTitle: state.PageTitle.concat([title]) };

        case 'UPDATE_USER':
            return {
                ...state, users: state.users.map((value, index) => {
                    if (index === state.users.indexOf(user)) {
                        if (name) {
                            value.name = name;
                        } else if (email) {
                            value.email = email;
                        }
                        value.age = age;
                        return value
                    } else {
                        return value;
                    }
                })
            };

        case 'DELETE_ANIMAL':
            const delAnimal = state.Animal.indexOf(animal);
            state.Animal.splice((delAnimal), 1);
            return { ...state, Animal: state.Animal }

        case 'DELETE_USER':
            const del = state.users.indexOf(user);
            state.users.splice((del), 1);
            return {
                ...state, users: state.users
            }
        
        // case 'CETAK_USER':
            

        // case 'CETAK_PAGETITLE':
        //     return{...state.PageTitle};

        default:
            return state;
    }
}

const store = createStore(userReducer);
const user1 ={
    id: 1,
    name: 'Fiqri',
    email: 'fiqri@emails.com',
};

const user2 = {
    id: 2,
    name: 'Rifka',
    email: 'rifqa@emails.com',
};
const kucing = {
    id: 1,
    name: 'kucing'
}
const pagetitle = {
    id: 1,
    title: 'title'
}

// function user(id, name, email, age) {
//     this.id=id;
//     this.name=name;
//     this.email=email;
//     this.age=age;
// }


store.dispatch({ type: 'INSERT_USER', user:user1 });
// store.dispatch({ type: 'INSERT_USER', user: user2 });

// store.dispatch({ type: 'UPDATE_USER', user: user1, age: 19 });
// store.dispatch({ type: 'UPDATE_USER', user: user2, email: 'rifqa@enigmacamp.com' });
// store.dispatch({ type: 'UPDATE_USER', user: user2, age: 20 });
// store.dispatch({type: 'DELETE_USER', user:user2});
// store.dispatch({type: 'DELETE_USER', user:user2});
// store.dispatch({ type: 'INSERT_ANIMAL', animal: kucing });
// store.dispatch({ type: 'UPDATE_ANIMAL', animal: kucing, name: 'harimau' });
// store.dispatch({ type: 'DELETE_ANIMAL', animal: kucing });

// store.dispatch({ type: 'UPDATE_TITLE', title: pagetitle, title: 'redux' });
// store.dispatch({type: 'UPDATE_TITLE', pagetitle,pagetitle:{...pagetitle.name='Redux'}});
// store.dispatch({type: 'CETAK_USER', users:user1});

// store.dispatch({type: 'CETAK_PAGETITLE', title:pagetitle});

// console.log('previousState:', previousState);
console.log('state:', store.getState());
// console.log();

// console.log('users:', store.getState().users);
// console.log('animal:', store.getState().Animal);

/**
 * EDIT USER 'fiqri', tambahkan property age:19
 * INSERT USER 'rifqa'
 * EDIT USER 'rifqa', UBAH EMAIL ke 'rifqa@enigmacamp.com'
 * EDIT USER 'Rifqa', tambahkan property age 19
 * DELETE user 'Rifqa'
 *
 * INSERT ANIMAL
 * UPDATE ANIMAL
 * DELETE ANIMAL
 *
 * EDIT PAGE TITLE
 *
 * cetak user
 * cetak page title
 */