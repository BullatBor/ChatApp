import React from 'react'
import classes from './Content.module.css'
import { LeftColumn } from './LeftColumn/LeftColumn'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { RightColumn } from './RightColumn/RightColumn'

export const Content = (props) => {
  return (
    <div className={classes.Profile}>
      <ProfileInfo profile={props.profile}/>
      <div className={classes.ProfilePosts}>
        <div>
          <LeftColumn/>
        </div>
        <div>
          <RightColumn/>
        </div>
        
      </div>
    </div>
      
  )
}
