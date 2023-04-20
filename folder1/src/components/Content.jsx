import React from 'react'
import classes from './Content.module.css'

export const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://images.justwatch.com/backdrop/257130664/s640'/>
      </div>
      <div>
        ava+description
      </div>
      <div>
        My Posts
        <div>
          New Post
        </div>
          <div className={classes.posts}>
            <div className={classes.item}>
              Post1
            </div>
            <div className={classes.item}>
              Post2
            </div>
          </div>
      </div>
    </div>
      
  )
}
