import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ARTICLE:
            return Object.assign({}, state, {articles: state.articles.concat(action.payload)});
        default:
            return state;
    }
    return [...state, action.payload]
};

export default rootReducer;