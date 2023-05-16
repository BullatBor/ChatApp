const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL_COUNT"
const SET_LOADER = "SET-LOADER"
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS"

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []//массив с id польз-ей у которых нажата кнопка подписаться/отписаться на время выполнения запросан а сервер
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {//глубокое копирование
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                       return { ...user, followed: true}
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {//глубокое копирование
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                       return { ...user, followed: false}
                    }
                    return user
                }),
            }
        case SET_USERS:
            return {//глубокое копирование
                ...state, users: [...action.users]
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
                followingInProgress: action.isFollowing ? 
                [...state.followingInProgress, action.userId] :
                state.followingInProgress.filter(id => id !== action.userId)
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
export const setFollowButton = (load, userId) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFollowing: load,
    userId
    })
    
export default usersReducer;  