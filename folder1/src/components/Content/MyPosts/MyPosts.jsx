import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts= () => {
  return (
    <div className={classes.content}>
      <div>
        My Posts
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
          <div className={classes.posts}>
            <Post message='Hi'/>
            <Post message='Hi'/>
          </div>
      </div>
    </div>
      
  )
}
