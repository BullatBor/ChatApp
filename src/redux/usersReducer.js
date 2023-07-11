import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET-USERS"
const SET_POSSIBLE_FRIENDS = "users/SET-POSSIBLE-FRIENDS"
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "users/SET-TOTAL_COUNT"
const SET_FETCHING_FRIENDS = "users/SET-FETCHING_FRIENDS"
const SET_LOADER = "users/SET-LOADER"
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING-IN-PROGRESS"

let initialState = {
    users: [
    ],
    possibleFriends: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFetchingFriends: true,
    followingInProgress: []//массив с id польз-ей у которых нажата кнопка подписаться/отписаться на время выполнения запросан а сервер
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {//глубокое копирование
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {//глубокое копирование
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case SET_USERS:
            return {//глубокое копирование
                ...state, users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_LOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ?
                    [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        case SET_POSSIBLE_FRIENDS:
            return {
                ...state,
                possibleFriends: [...action.users]
            }
        case SET_FETCHING_FRIENDS:
            return {
                ...state,
                isFetchingFriends: action.payload
            }
        default:
            return state;
    }
}

export const follow = (id) => ({
    type: FOLLOW,
    userId: id
})

export const unfollow = (id) => ({
    type: UNFOLLOW,
    userId: id
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setPossibleFriends = (users) => ({
    type: SET_POSSIBLE_FRIENDS,
    users
})

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    currentPage: page
})
export const setTotalCount = (count) => ({
    type: SET_TOTAL_COUNT,
    totalCount: count
})

export const setLoader = (load) => ({
    type: SET_LOADER,
    isFetching: load
})

export const setLoaderFriends = (load) => ({
    type: SET_FETCHING_FRIENDS,
    payload: load
})
export const setFollowButton = (load, userId) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFollowing: load,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize, isFriend) => {//ThunkCreator
    return async (dispatch) => { //Thunk функция которая выполняет асинхр работу и делает диспатчи
        dispatch(setLoader(true))
        const data = await usersAPI.getUsers(currentPage, pageSize, isFriend); //запрос на сервер
        dispatch(setUsers(data.items))
        dispatch(setLoader(false))
        dispatch(setTotalCount(data.totalCount))
    }
}

export const getPossibleFriendsThunkCreator = (currentPage) => {//ThunkCreator
    return async (dispatch) => { //Thunk функция которая выполняет асинхр работу и делает диспатчи
        dispatch(setLoaderFriends(true))
        const data = await usersAPI.getUsers(currentPage, 5, false); //запрос на сервер
        dispatch(setPossibleFriends(data.items))
        dispatch(setLoaderFriends(false))
    }
}

export const ChangeUsersPageThunkCreator = (PageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(PageNumber))
        dispatch(setLoader(true))
        const data = await usersAPI.getUsers(PageNumber, pageSize);
        dispatch(setLoader(false))
        dispatch(setUsers(data.items))
    }
}

export const FollowThunkCreator = (id, isFollow) => {
    return async (dispatch) => {
        dispatch(setFollowButton(true, id))
        if (isFollow) {
            const data = await usersAPI.follow(id);
            if (data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(setFollowButton(false, id))
            }
        }
        else {
            const data = await usersAPI.unfollow(id);
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
                dispatch(setFollowButton(false, id))
            }
        }
    }
}

export default usersReducer;  