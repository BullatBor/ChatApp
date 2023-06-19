import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_LOADER = "SET-LOADER"
const SET_STATUS = "SET-STATUS"
const SET_PROFILE_PHOTO = "SET-PROFILE-PHOTO"
const SET_DEFAULT_PHOTO = "SET-DEFAULT-PHOTO"

let initialState = {
    posts: [
        { id: 1, message: "sdfsdfsefsef", likesCount: 12 },
        { id: 2, message: "sdfsdfsefsef", likesCount: 12 },
        { id: 3, message: "sdfsdfsefsef", likesCount: 12 }
    ],
    profile: null,
    isFetching: true,
    AvatarImg: "https://atmstudio.su/d/warcraft-arthas-collectors-2_10.jpg",
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.PostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                PostText: ''
            };//Чтобы redux видел изменения, и чтобы сравнивал со старым state возращаем новый элемент
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
                AvatarImg: state.AvatarImg
            };//Чтобы redux видел изменения, делаем копию
        }
        case SET_LOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
}

export const addPost = (text) => ({
    type: ADD_POST,
    PostText: text
})
export const setUserProfile = (profile) => {
    return {
    type: SET_USER_PROFILE,
    profile
}
}
export const setLoader = (load) => ({
    type: SET_LOADER,
    isFetching: load
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const updateStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const setProfilePhotoSuccess = (photos) => ({
    type: SET_PROFILE_PHOTO,
    photos: photos
})

export const getProfileThunkCreator = (userId = 3) => {
    return async (dispatch) => {
        const data = await usersAPI.getProfileInfo(userId);
        dispatch(setUserProfile(data));
        dispatch(setLoader(false))
    }
}

export const getProfileStatusThunkCreator = (id = 2) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfileStatus(id);
        dispatch(setStatus(data))
    }
}

export const updateProfileStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const saveProfilePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(setProfilePhotoSuccess(data.data.photos))
        }
    }
}

export default profileReducer;