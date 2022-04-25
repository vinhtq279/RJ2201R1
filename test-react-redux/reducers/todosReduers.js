import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionsTypes';
const initialState = [
    {
        text: 'Use Redux',
        marked: false,
        id: 0
    },
];

export default function todos(state = initialState, action){
    switch (action.type){
        case ADD_TODO:
            return [...state, {
                id: (state.length === 0) ? 0 : state[state.length],
                marked: false,
                text: action.text
            }]
        case DELETE_TODO:
            return state.filter((todo) => {todo.id !== action.id});
        case EDIT_TODO:
            return state.map((todo) => {
                todo.id === action.id ? {...todo, text:action.text} : {...todo}
            });
        case MARK_TODO:
            return state.map((todo) => {
                return todo.id === action.id ? {...todo, marked: true}: {...todo}
            });
        case MARK_ALL:
            return state.map((todo) => {
                return {...todo, marked: true}
            });
        case CLEAR_MARKED:
            return state.filter((todo) => {
                return todo.marked === false 
            });
        default:
            return state;
    }
}
