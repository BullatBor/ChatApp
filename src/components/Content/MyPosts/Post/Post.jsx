import React, { useState } from 'react'
import classes from './Post.module.css'
import Like from "../../../../assets/Likes.png"
import Comment from "../../../../assets/comment.png"
import cn from 'classnames'

export const Post = (props) => {
  const date = DateParse(props.date);
  const [like, setLike] = useState(props.likesCount);
  const [showMore, setShowMore] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const addLike = () => {
    if (!isLike) {
      setLike(like + 1);
      setIsLike(true);
    }
    else {
      setLike(like - 1);
      setIsLike(false);
    }
  }
  return (
    <div className={classes.postContent}>
      <div className={classes.postHeader}>
        <img src={props.defaultImage} />
        <div className={classes.postHeaderTitle}>
          <span>{props.fullName}</span>
          <time>{date}</time>
        </div>
      </div>
      <div className={classes.postWall}>
        <div className={classes.wallText}>
          {
            props.message.length > 100
              ?
              <>
                {
                  showMore ? <span>{props.message}</span>
                    :
                    <>
                      <span className={classes.wallText}>{props.message.slice(0, 100)}...</span>
                      <span className={classes.showMore} onClick={() => setShowMore(true)}> показать еще</span>
                    </>
                }
              </>
              :
              <span>{props.message}</span>
          }
        </div>
        {
          props.img && <img src={props.img} loading="lazy" />
        }
      </div>
      <div className={classes.postFooter}>
        <div className={classes.postFooterBtns}>
          <div className={cn(classes.footerItem, isLike && classes.likedPost)} onClick={addLike}>
            <img src={Like} />
            <span>{like}</span>
          </div>
          <div className={classes.footerItem}>
            <img src={Comment} />
            <span>{props.comments.length}</span>
          </div>
        </div>
      </div>
    </div>

  )
}

const DateParse = (stringDate) => {
  const dateParts = stringDate.split("-");
  const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const dateStringFormatted = date.toLocaleDateString("ru-RU", options);
  return dateStringFormatted;
}