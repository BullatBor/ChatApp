import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts= () => {
  return (
    <div className={classes.content}>
      <div className={classes.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
          <div className={classes.posts}>
            <Post message='Hi' likesCount={2}/>
            <Post message='Tvar ' likesCount={50}/>
          </div>
      </div>
    </div>
      
  )
}
