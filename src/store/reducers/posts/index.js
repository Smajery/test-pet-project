const initialState = {
    posts: []
}

export default function PostsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_POSTS":
            return {...state, posts: action.payload}

        default:
            return state
    }

}