import React from 'react'
import classes from '../Dialogs.module.css'

export const FriendBlock = (props) => {
  return(
      <div className={classes.FriendPhoto}>
        <img src='https://pictureholiday.ru/wp-content/uploads/2018/05/2.jpg'/>
        <span>{props.name}</span>
      </div>
  )
}


