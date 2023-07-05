import React from 'react'
import classes from './FriendsGroup.module.css'
import defaultPhoto from "../../../../assets/ava.png"
import { NavLink } from 'react-router-dom'

export const FriendsGroup = (props) => {
  return (
    <div className={classes.Layer}>
      <div className={classes.friendsTitle}>
        <span>Друзья</span>
      </div>
      <div className={classes.friendsList}>
        {
          props.isOwner &&
          props.friends.map(item => {
            return <Friend key={item.id} fullName={item.name} img={item.photos.large || defaultPhoto} id={item.id} />
          })
        }
      </div>
    </div>
  )
}

const Friend = (props) => {
  return (
    <NavLink to={'/profile/' + props.id} className={classes.friendLink}>
      <div className={classes.friend}>
        <div className={classes.friendImg}>
          <img src={props.img} />
        </div>
        <span>{props.fullName}</span>
      </div>
    </NavLink>
  )
}
