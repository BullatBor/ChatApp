import React, { useContext } from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext'
import { MyPosts } from './MyPosts'


export const MyPostsContainer = (props) => {
  const store = useContext(StoreContext)

  let state = store.getState();
  const AddPost = () => {
    store.dispatch(addPostActionCreator());
  }

  const ChangeTextArea = (text) => {
   store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts post={state.ProfilePage.posts} updateNewPostText={ChangeTextArea} addPost={AddPost} newPostText={state.ProfilePage.PostText}/>
  )
}
