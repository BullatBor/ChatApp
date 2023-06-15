
import { authAPI, usersAPI } from "../api/api";
import { setUserProfile } from "./profileReducer";

const SET_USER_DATA = "auth/SET-USER-DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {//глубокое копирование
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
})


export const AuthThunkCreator = (userId = 2) => {
    return async (dispatch) => { //использ async await вместо then
        const data = await authAPI.auth();
        if (data.resultCode === 0) {
            usersAPI.getProfileInfo(userId).then(data_1 => {
                dispatch(setUserProfile(data_1));
            });
            let { id: id_1, email, login } = data.data;
            dispatch(setUserData(id_1, email, login, true));
        }
    }
}

export const LoginThunkCreator = (email, password, rememberMe, captcha, setStatus) => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(AuthThunkCreator(data.data.userId))
        } else {
            setStatus({ error: "Неправильный логин или пароль" })
        }
    }
}


export const LogoutThunkCreator = () => {
    return async (dispatch) => {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducer;
