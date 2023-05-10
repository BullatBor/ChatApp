const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    Dialogs: [
        {id: 1, name: "Erdem"},
        {id: 2, name: "Timur"},
        {id: 3, name: "Dashi"}
    ],
    Messages: [
        {id: 1, message: "sdfsdf"},
        {id: 2, message: "sdfs"},
        {id: 3, message: "sdfsdfwqwe31"},
        {id: 4, message: "TEST"}
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        case SEND_MESSAGE: {
            let text = state.newMessageText;
            return {
                ...state,
                Messages: [...state.Messages, {id: 6, message: text}], //добавление нового текста в массив
                newMessageText: ''
            };
        }
        default: return state
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
  })

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }) 


  
export default dialogsReducer;