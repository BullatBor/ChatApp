import React from 'react'
import classes from './ProfileInfo.module.css'
import User from '../../../assets/userIcon.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'

export const ProfileInfo = ({profile, status, ...props}) => {
  const mainPhotoSelected = (e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
  }
  }
  return (
    <div className={classes.Profile}>
      <div className={classes.mainImage}>

      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avatarBack}>
          <img src={profile.photos.large || props.avatar}/>
        </div>
        <div className={classes.ProfileInfo}>
          <h2 className={classes.ProfileInfo_Name}>{profile.fullName}</h2>
          {
            props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>
          }
          <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus}/>
          <div className={classes.contacts}>
            <a href='#'>{profile.contacts.github}</a>
          </div>
        </div>
        <div className={classes.panelBtns}>
          <div className={classes.messageBtn}>
            <a><span>Сообщение</span></a>            
          </div>
          <div className={classes.friendBtn}>
            <img src={User}/>
          </div>
            
        </div>
      </div>
    </div>
      
  )
}
