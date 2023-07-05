import { dialogsAPI, usersAPI } from "../api/api";

const SEND_MESSAGE = "dialogs/SEND_MESSAGE"
const SET_DIALOGS = "dialogs/SET-DIALOGS"

let initialState = {
    Dialogs: [
    ],
    Messages: [
        {id: 1, message: "sdfsdf"},
        {id: 2, message: "sdfs"},
        {id: 3, message: "sdfsdfwqwe31"},
        {id: 4, message: "TEST"}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){       
        case SEND_MESSAGE: {
            return {
                ...state,
                Messages: [...state.Messages, {id: state.Messages.length + 1, message: action.text}], //добавление нового текста в массив
            };
        }
        case SET_DIALOGS: {
            return {
                ...state,
                Dialogs: [...action.dialogs], //добавление нового текста в массив
            };
        }
        default: return state
    }
}

export const sendMessageCreator = (message) => ({
    type: SEND_MESSAGE,
    text: message
  })

  export const setDialogs = (dialogs) => ({
    type: SET_DIALOGS,
    dialogs
  })

export const createNewChatThunkCreator = (userId) => {
    return async (dispatch) => {
        const chat = await dialogsAPI.newChat(userId);
        dispatch(sendMessageCreator(chat))
    }
}

export const getDialogsThunkCreator = (currentPage, pageSize, isFriend) => {
    return async (dispatch) => {
        const data = await usersAPI.getUsers(currentPage, pageSize, isFriend);
        dispatch(setDialogs(data.items));
    }
}



  
export default dialogsReducer;