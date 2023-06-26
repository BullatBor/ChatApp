const SEND_MESSAGE = "dialogs/SEND_MESSAGE"

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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){       
        case SEND_MESSAGE: {
            return {
                ...state,
                Messages: [...state.Messages, {id: state.Messages.length + 1, message: action.text}], //добавление нового текста в массив
            };
        }
        default: return state
    }
}

export const sendMessageCreator = (message) => ({
    type: SEND_MESSAGE,
    text: message
  })

  
export default dialogsReducer;