
import { AuthThunkCreator } from "./authReducer";


const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {//глубокое копирование
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = (id) => {
    return (dispatch) => {
        let promise = dispatch(AuthThunkCreator());
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}


export default appReducer;  
