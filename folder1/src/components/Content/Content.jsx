import React from 'react'
import classes from './Content.module.css'
import { MyPosts } from './MyPosts/MyPosts'

export const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://images.justwatch.com/backdrop/257130664/s640'/>
      </div>
      <div>
        ava+description
      </div>
      <MyPosts/>
    </div>
      
  )
}
