import React from 'react'
import { MyPostsContainer } from '../MyPosts/MyPostsContainer'
import { GroupItems } from './GroupItem/GroupItems'
import classes from './LeftColumn.module.css'

export const LeftColumn = () => {
  return (
    <div className={classes.Column}>
        <GroupItems/>
          <MyPostsContainer/>
    </div>
  )
}
