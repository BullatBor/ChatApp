import React from 'react'
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div className={classes.Profile}>
      <div className={classes.mainImage}>

      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avatarBack}>
          <img src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'/>
        </div>
        <div className={classes.ProfileInfo}>
          <h2 className={classes.ProfileInfo_Name}>Иванов Иван</h2>
          <div>
            Москва МГУ
          </div>
        </div>
      </div>
    </div>
      
  )
}
