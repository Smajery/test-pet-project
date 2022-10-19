import {ADD_TODO, ADD_MANY_TODOS, REMOVE_TODO, SET_IS_LOADING} from "./consts";

const initialState = {
    isLoading: false,
    todos: [],
}

export default function TodosReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MANY_TODOS:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}