const initialState = {
    isLoading: false,
    posts: []
}

export default function PostsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_POSTS":
            return {...state, posts: action.payload}
        case "SET_IS_LOADING":
            return {...state, isLoading: action.payload}
        default:
            return state
    }

}