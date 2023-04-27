import React, { useState } from 'react'
import classes from './Post.module.css'

export const Post= (props) => {
  const [like, setLike] = useState(0)
  return (
        <div className={classes.item}>
          <img src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'/>
          {props.message}
          <div style={{cursor:"pointer"}} onClick={() => setLike(like+1)}>
            <span>{props.likesCount} like</span>
          </div>
        </div>        
      
  )
}
