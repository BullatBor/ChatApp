import React from 'react'
import classes from './Content.module.css'
import { LeftColumn } from './LeftColumn/LeftColumn'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { RightColumn } from './RightColumn/RightColumn'

export const Content = (props) => {
  return (
    <div className={classes.Profile}>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} avatar={props.avatar} profile={props.profile} status={props.status} updateStatus={props.updateProfileStatusThunkCreator}/>
      <div className={classes.ProfilePosts}>
        <div>
          <LeftColumn isOwner={props.isOwner} avatar={props.avatar} album={props.photoAlbum} addPhoto={props.addPhotoInAlbum}/>
        </div>
        <div>
          <RightColumn friends={props.friends} isOwner={props.isOwner} isFetching={props.isFetch}/>
        </div>
        
      </div>
    </div>
      
  )
}
