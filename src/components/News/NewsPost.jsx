import React from 'react'
import classes from './News.module.css'
import Like from '../../assets/Likes.png'
import Comment from '../../assets/comment.png'


export const NewsPost = (props) => {
  const addLike = () => {
    props.addLike(props.id)
  }
  const setVisibleComment = () => {
    props.visibleComm(props.id)
  }
  return (
    <div className={classes.Post}>
        <div className={classes.postHeader}>
            <span>{props.text}</span>
        </div> 
        <div className={classes.postBody}>
            <img src={props.img}/>
        </div>

          <div className={classes.footer}>
            <div className={classes.footerItem} onClick={addLike}>
              <img src={Like} />
              <span>{props.likesCount}</span>
            </div>
            <div className={classes.footerItem} onClick={setVisibleComment}> 
              <img src={Comment} />
              <span>{props.comments.length}</span>
            </div> 
          </div>        
          {
            props.commentVisible &&
            <div className={classes.comments}>
              {props.comments[0].text}
            </div>
          }
    </div>
  )
}
