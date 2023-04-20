import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts= () => {
  return (
    <div className={classes.content}>
      <div>
        My Posts
        <div>
          New Post
        </div>
          <div className={classes.posts}>
            <Post/>
          </div>
      </div>
    </div>
      
  )
}
