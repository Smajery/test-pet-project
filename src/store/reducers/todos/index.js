export const initialState = {
    todos: []
}

export default function TodosReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_TODOS":
            return {...state, todos: action.payload}

        default:
            return state
    }
}