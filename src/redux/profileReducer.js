import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_LOADER = "profile/SET-LOADER"
const SET_STATUS = "profile/SET-STATUS"
const SET_PROFILE_PHOTO = "profile/SET-PROFILE-PHOTO"
const SET_DEFAULT_PHOTO = "profile/SET-DEFAULT-PHOTO"

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
        case SET_DEFAULT_PHOTO:
            return {
                ...state,
                AvatarImg: action.photo
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

export const setDefaultPhoto = (photo) => ({
    type: SET_DEFAULT_PHOTO,
    photo: photo
})

export const getProfileThunkCreator = (userId = 2) => {
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
    try{
        return async (dispatch) => {
            const data = await profileAPI.updateStatus(status);
            if (data.resultCode === 0) {
                dispatch(setStatus(status))           
            }
        }
    } catch(error){
        console.log(error);//оставить это перехватчик ошибок или из App
    }
    
}

export const saveProfilePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(setProfilePhotoSuccess(data.data.photos))
            dispatch(setDefaultPhoto(data.data.photos.large))
        }
    }
}

export const saveProfileThunkCreator = (profile, setStatus) => {
    return async (dispatch, getState) => {
        const userId = getState().AuthPage.userId;
        const data = await profileAPI.saveProfile(profile);  
        if (data.resultCode === 0) {
            dispatch(getProfileThunkCreator(userId))
            setStatus({ success: "Изменения сохранены" })
        } 
        else setStatus({ error: data.messages[0] }) 
    }
}


export default profileReducer;