import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Users.module.css'
import ava from '../../../assets/ava.png'
import addFriend from '../../../assets/addFriend.png'
import access from '../../../assets/Ok.png'
import { followAPI } from '../../../api/api';
import { Preloader } from '../../common/preloader/Preloader'

export const User = (props) => {
  let path = "/profile/" + props.state.id;
  let isFollowed = props.state.followed;
  let LoaderCheck = true;

  const Followed = () => {
  props.setFollowButton(true, props.state.id)
  followAPI.follow(props.state.id).then(data => {
    if(data.resultCode === 0){
      props.followed(props.state.id)
      props.setFollowButton(false, props.state.id)
    }
        })
  }

  const UnFollowed = () => {
    props.setFollowButton(true, props.state.id)
    followAPI.unfollow(props.state.id).then(data => {
    if(data.resultCode === 0){
      props.unfollowed(props.state.id)
      props.setFollowButton(false, props.state.id)
    }
        })
   }

  return (
    <div className={classes.User}>
      <div className={classes.userPhoto}>
        <NavLink to={'/profile/' + props.state.id}>
          <img src={props.state.photos.small != null ? props.state.photos.small : ava}/>
        </NavLink>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.userName}>
          <NavLink to={path} className={({ isActive }) => (isActive ? classes.activeLink.toString() : "")}>{props.state.name}</NavLink>
        </div>
        <div className={classes.userStatus}>        
          <span>{props.state.status}</span>
        </div>
        <div className={classes.userStatus}>     
          <button disabled={props.isFollowing.some(id => id === props.state.id)}
          onClick={isFollowed ? UnFollowed :  Followed}>
            {isFollowed ? "Отписаться" : "Подписаться"}
            </button>
        </div>  
      </div>
      <div className={classes.addFriend}>
        {
          isFollowed ? <img src={access} onClick={UnFollowed}/> :  <img src={addFriend} onClick={Followed}/> 
        }
           
      </div>
    </div>
      
  )
}
