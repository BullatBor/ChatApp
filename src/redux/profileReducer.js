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
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.PostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.PostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.PostText = action.newText;
            return state
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