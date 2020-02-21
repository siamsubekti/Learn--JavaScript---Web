import { ADD_ARTICLE, ADD_CONTENT } from '../constants/actions-types';

const initialState = {
    articles: []
};

function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case ADD_ARTICLE:
        console.log('ARTICLES');
            return {
                ...state, articles: state.articles.concat(actions.payload)
            };
        case ADD_CONTENT:
        return {
            ...state, articles: state.articles.concat(actions.payload)
        };
        
        default:
            return state;

    }


}


export default rootReducer;