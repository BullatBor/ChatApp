import React from 'react'
import { FriendsGroup } from './GroupItem/FriendsGroup'
import classes from './RightColumn.module.css'

export const RightColumn = () => {
  return (
    <div className={classes.Column}>
        <FriendsGroup/>
    </div>
  )
}
