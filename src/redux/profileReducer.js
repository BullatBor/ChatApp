import { usersAPI, profileAPI, postsAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_LOADER = "profile/SET-LOADER"
const SET_STATUS = "profile/SET-STATUS"
const SET_PROFILE_PHOTO = "profile/SET-PROFILE-PHOTO"
const SET_DEFAULT_PHOTO = "profile/SET-DEFAULT-PHOTO"
const ADD_PHOTO_IN_ALBUM = "profile/ADD-PHOTO-IN-ALBUM"
const GET_PHOTOS_IN_ALBUM = "profile/GET-PHOTOS-IN-ALBUM"

let initialState = {
    posts: [
        {
            id: 1, message: "Есть возможность опубликовывать фото", img: "https://sun4-19.userapi.com/impg/zIZtUkn-vWEqhSQk4B3AEmZsDXopIdemzKPBjA/9Tj_UP2tVx0.jpg?size=526x624&quality=96&sign=425cfd1050990b40dc3f32d612dc40fc&type=album",
            comments: [
                { id: 0, text: "Comment1" }
            ],
            date: "20-06-2023",
            likesCount: 3
        },

        {
            id: 2, message: "start", img: null,
            comments: [
                { id: 0, text: "Comment1" }
            ],
            date: "25-04-2023",
            likesCount: 9
        },

        {
            id: 3, message: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.",
            img: null,
            comments: [
                { id: 0, text: "Comment1" }
            ],
            date: "10-05-2023",
            likesCount: 12
        }
    ],
    photoAlbum: [{ id: 0, img: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" },
    { id: 1, img: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" }
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
                img: action.image,
                date: action.date,
                comments: 0,
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
                AvatarImg: state.AvatarImg,
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
        case GET_PHOTOS_IN_ALBUM: {
            let newImg = {
                id: state.photoAlbum.length + 1,
                img: action.photo
            }
            return {
                ...state,
                photoAlbum: [newImg]
            }
        }
        case ADD_PHOTO_IN_ALBUM: {
            let newImg = {
                id: state.photoAlbum.length + 1,
                img: action.photo
            }
            return {
                ...state,
                photoAlbum: [newImg, ...state.photoAlbum]
            }
        }
        default:
            return state;
    }
}

export const addPost = (text, date, image) => ({
    type: ADD_POST,
    PostText: text,
    image: image,
    date: date
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

export const addPhotoInAlbum = (photo) => ({
    type: ADD_PHOTO_IN_ALBUM,
    photo: photo
})

export const GetPhotosInAlbum = (photo) => ({
    type: GET_PHOTOS_IN_ALBUM,
    photo: photo
})

export const getProfileThunkCreator = (userId = 2) => {
    return async (dispatch) => {
        const data = await usersAPI.getProfileInfo(userId);
        dispatch(GetPhotosInAlbum(data.photos.large));
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
    try {
        return async (dispatch) => {
            const data = await profileAPI.updateStatus(status);
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        }
    } catch (error) {
        console.log(error);//оставить это перехватчик ошибок или из App
    }

}

export const saveProfilePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(setProfilePhotoSuccess(data.data.photos.large))
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

export const getPosts = () => {
    return async (dispatch) => {
        const posts = await postsAPI.getPosts();
        debugger
    }
}


export default profileReducer;