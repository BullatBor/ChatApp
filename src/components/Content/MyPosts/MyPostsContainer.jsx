import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'

/*
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

}*/




const mapStateToProps = (state) => {//Тут для отрисовки возвращаемый обьект сравнивается со старым объектом, после connect, и это пропсы которые отправляются в MyPost
  return {
    posts: state.ProfilePage.posts,
    newPostText: state.ProfilePage.PostText,
    defaultImage: state.ProfilePage.AvatarImg,
    fullName: state.ProfilePage.profile?.fullName
  }
}



export let MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);//есть свой отрисовщик у connect

