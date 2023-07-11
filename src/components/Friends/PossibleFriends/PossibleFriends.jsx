import React from 'react'
import { Preloader } from '../../common/preloader/Preloader'
import classes from "../Users.module.css"
import defaultPhoto from "../../../assets/ava.png"
import { NavLink } from 'react-router-dom'

export const PossibleFriends = (props) => {
  return (
    <div className={classes.possibleFriends}>
      <div className={classes.headerFriends}>
        <span>Возможные друзья</span>
      </div>
      {
        props.isFetching ? <div></div>
          :
          props.possibleFriends.map(friend => {
            return (
              <NavLink key={friend.id} to={"/profile/"+friend.id}>
                <div className={classes.friend}>
                  <div className={classes.friendImg}>
                    <img src={friend.photos.large || defaultPhoto} />
                  </div>
                  <div className={classes.friendName}><span>{friend.name}</span></div>
                </div>
              </NavLink>
            )
          })
      }
    </div>
  )
}
