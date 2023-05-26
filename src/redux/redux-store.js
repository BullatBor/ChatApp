import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'
import { newsReducer } from "./newsReducers";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer,
    AuthPage: authReducer,
    NewsPage: newsReducer,
    form: formReducer
})//Смешать три reducer, автоматически создает state

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.storeg = store

export default store;