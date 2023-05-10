import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Users.module.css'
import ava from '../../../assets/ava.png'

export const User = (props) => {
  let path = "/friends/" + props.state.id;
  let isFollowed = props.state.followed;

  const Followed = () => {
   props.followed(props.state.id)
  }

  const UnFollowed = () => {
    props.unfollowed(props.state.id)
   }

  return (
    <div className={classes.User}>
      <div className={classes.userPhoto}>
        <img src={props.state.photos.small != null ? props.state.photos.small : ava}/>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.userName}>
          <NavLink to={path} className={({ isActive }) => (isActive ? classes.activeLink.toString() : "")}>{props.state.name}</NavLink>
        </div>
        <div className={classes.userStatus}>        
          <span>{props.state.status}</span>
        </div>
        <div className={classes.userStatus}>        
          <button onClick={isFollowed ? UnFollowed : Followed}>
            {isFollowed ? "Подписаться" : "Отписаться"}
            </button>
        </div>  
      </div>
    </div>
      
  )
}
