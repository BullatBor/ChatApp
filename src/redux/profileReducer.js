const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: "sdfsdfsefsef", likesCount: 12},
        {id: 2, message: "sdfsdfsefsef", likesCount: 12},
        {id: 3, message: "sdfsdfsefsef", likesCount: 12}
    ],
    PostText: "Введите текст",
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.PostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                PostText: ''
            };//Чтобы redux видел изменения, и чтобы сравнивал со старым state возращаем новый элемент
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                PostText: action.newText
            };//Чтобы redux видел изменения, делаем копию
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
  })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }) 

export default profileReducer;