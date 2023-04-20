import React from 'react'
import classes from './Post.module.css'

export const Post= ({message}) => {
  return (
        <div className={classes.item}>
          <img src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'/>
          {message}
          <div>
            <span>like</span>
          </div>
        </div>        
      
  )
}
