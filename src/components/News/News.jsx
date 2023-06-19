import React from 'react'
import classes from './News.module.css'
import { NewsPost } from './NewsPost'
import sendMessage from '../../assets/sendMessage.png'

export const News = (props) => {

  const ChangeTextForPost = (e) => {
    let text = e.target.value;
    props.TextChange(text)
  }

  const AddPost = () => {
    props.AddNews()
  }

  return (
    <div className={classes.newsWrapper}>
      <div className={classes.newsPanel}>
        <div className={classes.newPostBlock}>
          <img className={classes.profileImg} src={props.profilePhoto || props.defaultPhoto} />
          <div className={classes.newPostAdd}>
            <input placeholder='Что у вас нового?' onChange={ChangeTextForPost} value={props.NewPostText}></input>
          </div>
          <img onClick={AddPost} className={classes.sendMessage} src={sendMessage}/>
        </div>
        {props.news.map(item => {
          return <NewsPost key={item.id} {...item} addLike = {props.AddLike} visibleComm = {props.setVisibleComment}/>
        })}
      </div>
      <div className={classes.rightPanel}>
        <input></input>
      </div>
    </div>
  )
}
