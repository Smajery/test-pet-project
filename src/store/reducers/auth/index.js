import {SET_IS_AUTH} from "./consts";

const initialState = {
    isAuth:  false
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {...state, isAuth: action.payload}

        default:
            return state
    }
}