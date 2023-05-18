import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_LOADER = "SET-LOADER"

let initialState = {
    posts: [
        {id: 1, message: "sdfsdfsefsef", likesCount: 12},
        {id: 2, message: "sdfsdfsefsef", likesCount: 12},
        {id: 3, message: "sdfsdfsefsef", likesCount: 12}
    ],
    PostText: "Введите текст",
    profile: null,
    isFetching: true,
    AvatarImg: null,
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
                AvatarImg: action.profile.photos.large
            };//Чтобы redux видел изменения, делаем копию
        }
        case SET_LOADER:
            return {
                ...state,
                isFetching: action.isFetching
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

export const setUserProfile = (profile) => ({
type: SET_USER_PROFILE,
profile
})
export const setLoader = (load) => ({
    type: SET_LOADER,
    isFetching: load
    })

export const getProfileThunkCreator = (userId = 2) => {
    return (dispatch) => {
        usersAPI.getProfileInfo(userId).then(data => {
                    dispatch(setUserProfile(data));
                    dispatch(setLoader(false))
                })
            }      
    }
export default profileReducer;