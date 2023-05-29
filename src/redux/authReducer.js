import { Navigate } from "react-router-dom";
import { authAPI, usersAPI } from "../api/api";
import { setUserProfile } from "./profileReducer";

const SET_USER_DATA = "SET-USER-DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {//глубокое копирование
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data:{userId, email, login}
  })

  export const AuthThunkCreator = (userId = 2) => {
    return (dispatch) => {
        authAPI.auth().then(data => {
            if(data.resultCode === 0) {
                usersAPI.getProfileInfo(userId).then(data => {//для получения фотки на кнопку логина
                dispatch(setUserProfile(data));
                })
              let {id, email, login} = data.data;
              dispatch(setUserData(id, email, login))
            }      
        })
    }
}
    
export const LoginThunkCreator = (email, password, rememberMe, captcha) => {
    return (dispatch) => {    
        authAPI.login(email, password, rememberMe, captcha).then(data => {
            if(data.resultCode === 0) {
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
            }      
        })
    }
}
    
export default authReducer;  