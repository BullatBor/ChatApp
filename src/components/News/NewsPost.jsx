import React, { useState } from 'react'
import classes from './News.module.css'
import Like from '../../assets/Likes.png'
import Comment from '../../assets/comment.png'


export const NewsPost = (props) => {
  const [like, setLike] = useState(0);
  const [comments, setComments] = useState(0);
  const [visibleComment, setVisibleComment] = useState(false);
  const addLike = () => {
    if(like == 1){
      setLike(like-1)
    } else setLike(like+1)
  }
  const commentShow = () => {
    setVisibleComment(!visibleComment)
  }
  return (
    <div className={classes.Post}>
        <div className={classes.postHeader}>
            <span>{props.title}</span>
        </div> 
        <div className={classes.postBody}>
          {
            props.body ?
            props.body
            :
            <img src={props.img}/>

          }           
        </div>

          <div className={classes.footer}>
            <div className={classes.footerItem} onClick={addLike}>
              <img src={Like} />
              <span>{like}</span>
            </div>
            <div className={classes.footerItem} onClick={commentShow}> 
              <img src={Comment} />
              <span>{comments}</span>
            </div> 
          </div>        
          {
            visibleComment &&
            <div className={classes.comments}>
              comment
            </div>
          }
    </div>
  )
}
