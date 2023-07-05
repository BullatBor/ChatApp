import React, { useEffect } from 'react'
import classes from './News.module.css'
import { NewsPost } from './NewsPost'
import sendMessage from '../../assets/sendMessage.png'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsThunkCreator } from '../../redux/newsReducers'

export const News = (props) => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.NewsPage.news);
  const defaultPhoto = useSelector(state => state.ProfilePage.AvatarImg);

  const ChangeTextForPost = (e) => {
    let text = e.target.value;
    props.TextChange(text)
  }

  const AddPost = () => {
    props.AddNews()
  }

  useEffect(() => {
    dispatch(getPostsThunkCreator())
  }, [])

  return (
    <div className={classes.newsWrapper}>
      <div className={classes.newsPanel}>
        <div className={classes.newPostBlock}>
          <img className={classes.profileImg} src={defaultPhoto} />
          <div className={classes.newPostAdd}>
            <input placeholder='Что у вас нового?' onChange={ChangeTextForPost} value={props.NewPostText}></input>
          </div>
          <img onClick={AddPost} className={classes.sendMessage} src={sendMessage}/>
        </div>
        {posts.map(item => {
          return <NewsPost key={item.id} {...item}/>
        })}
      </div>
      <div className={classes.rightPanel}>
        <input></input>
      </div>
    </div>
  )
}
