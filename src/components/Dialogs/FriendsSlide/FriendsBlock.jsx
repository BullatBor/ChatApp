import React from 'react'
import classes from '../Dialogs.module.css'
import defaultPhoto from '../../../assets/ava.png'

export const FriendBlock = (props) => {
  const name = props.name.split(' ');
  return(
      <div className={classes.FriendPhoto}>
        <img src={props.img || defaultPhoto}/>
        <span>{name[0]}</span>
      </div>
  )
}


