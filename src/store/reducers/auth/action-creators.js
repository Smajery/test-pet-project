import {SET_IS_AUTH} from "./consts";

export const AuthActionCreators = {
    setIsAuth: (isAuth) => ({type: SET_IS_AUTH, payload: isAuth}),

    logIn: () => async dispatch => {
        localStorage.setItem("auth", "true")
        dispatch(AuthActionCreators.setIsAuth(true))
    },
    logOut: () => async dispatch => {
        localStorage.removeItem("auth")
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}