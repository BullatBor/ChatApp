import { authAPI, securityAPI, usersAPI } from "../api/api";
import { setDefaultPhoto, setUserProfile } from "./profileReducer";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_CAPTCHA_URL = "auth/SET-CAPTCHA-URL";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null //if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
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

export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: { captchaUrl }
})


export const AuthThunkCreator = () => {
    return async (dispatch) => { //использ async await вместо then
        const data = await authAPI.auth();
        if (data.resultCode === 0) {
            usersAPI.getProfileInfo(data.data.id).then(data_1 => {
                dispatch(setUserProfile(data_1));            
                data_1.photos.large !== null && dispatch(setDefaultPhoto(data_1.photos.large))
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
            if (data.resultCode == 10) {
                dispatch(getCaptchaThunkCreator());
            }
            setStatus({ error: "Неправильный логин или пароль" })
        }
    }
}

export const getCaptchaThunkCreator = () => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(setCaptchaUrl(captchaUrl));
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
