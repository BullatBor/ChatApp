import React from 'react'
import { FriendsGroup } from './GroupItem/FriendsGroup'
import classes from './RightColumn.module.css'

export const RightColumn = (props) => {
  return (
    <div className={classes.Column}>
        <FriendsGroup friends={props.friends} isOwner={props.isOwner}/>
    </div>
  )
}
