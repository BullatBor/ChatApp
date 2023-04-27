import React from 'react'
import classes from './Content.module.css'
import { GroupItems } from './LeftColumn/GroupItem/GroupItems'
import { LeftColumn } from './LeftColumn/LeftColumn'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { RightColumn } from './RightColumn/RightColumn'

export const Content = (props) => {

  return (
    <div className={classes.Profile}>
      <ProfileInfo/>
      <div className={classes.ProfilePosts}>
        <div>
          <LeftColumn state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
        <div>
          <RightColumn/>
        </div>
        
      </div>
    </div>
      
  )
}
