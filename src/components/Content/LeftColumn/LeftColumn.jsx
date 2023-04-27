import React from 'react'
import { MyPosts } from '../MyPosts/MyPosts'
import { GroupItems } from './GroupItem/GroupItems'
import classes from './LeftColumn.module.css'

export const LeftColumn = (props) => {

  return (
    <div className={classes.Column}>
        <GroupItems/>
          <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}
