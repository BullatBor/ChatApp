
import { authAPI, usersAPI } from "../api/api";
import { setUserProfile } from "./profileReducer";

const SET_USER_DATA = "SET-USER-DATA";
const SHOW_MODAL = "SHOW-MODAL";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {//глубокое копирование
                ...state,
                ...action.payload,
            }
        case SHOW_MODAL:
            return {//глубокое копирование
                ...state,
                showModal: action.isShow
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload:{userId, email, login, isAuth}
  })


  export const AuthThunkCreator = (userId = 2) => {
    return (dispatch) => {
        return authAPI.auth().then(data => {
            if(data.resultCode === 0) {
                usersAPI.getProfileInfo(userId).then(data => {//для получения фотки на кнопку логина
                dispatch(setUserProfile(data));
                })
              let {id, email, login} = data.data;
              dispatch(setUserData(id, email, login, true))
            }      
        })
    }
}
    
export const LoginThunkCreator = (email, password, rememberMe, captcha, setStatus) => {
    return (dispatch) => {    
        authAPI.login(email, password, rememberMe, captcha).then(data => {
            if(data.resultCode === 0) {
                dispatch(AuthThunkCreator(data.data.userId))
            } else {
                setStatus({error: "Неправильный логин или пароль"})     
            }      
        })
    }
}


export const LogoutThunkCreator = () => {
    return (dispatch) => {           
        authAPI.logout().then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }      
        })
    }
}
    
export default authReducer;  


/*
let userId = data.data.userId;
                authAPI.auth().then(data => {
                    if(data.resultCode === 0) {
                        usersAPI.getProfileInfo(userId).then(data => {//для получения фотки на кнопку логина
                        dispatch(setUserProfile(data));
                        debugger
                        })
                      let {id, email, login} = data.data;
                      dispatch(setUserData(id, email, login))                    
                    }      
                })
*/