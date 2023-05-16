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


    
export default authReducer;  