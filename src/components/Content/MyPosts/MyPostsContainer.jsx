import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'


export const MyPostsContainer = (props) => {
  let state = props.store.getState();
  const AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const ChangeTextArea = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts post={state.ProfilePage.posts} updateNewPostText={ChangeTextArea} addPost={AddPost} newPostText={state.ProfilePage.PostText}/>
  )
}
