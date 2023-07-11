import React from 'react'
import { MyPostsContainer } from '../MyPosts/MyPostsContainer'
import { GroupItems } from './GroupItem/GroupItems'
import classes from './LeftColumn.module.css'

export const LeftColumn = (props) => {
  return (
    <div className={classes.Column}>
        <GroupItems avatar={props.avatar} album={props.album} addPhoto={props.addPhoto} isOwner={props.isOwner}/>
          <MyPostsContainer isOwner={props.isOwner}/>
    </div>
  )
}
