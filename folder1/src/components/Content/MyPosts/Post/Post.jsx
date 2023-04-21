import React, { useState } from 'react'
import classes from './Post.module.css'

export const Post= ({message, likesCount}) => {
  const [like, setLike] = useState(0)
  return (
        <div className={classes.item}>
          <img src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'/>
          {message}
          <div style={{cursor:"pointer"}} onClick={() => setLike(like+1)}>
            <span>{likesCount} like</span>
          </div>
        </div>        
      
  )
}
