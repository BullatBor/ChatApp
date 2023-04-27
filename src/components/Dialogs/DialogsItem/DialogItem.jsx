import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'

export const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return(
    <div className={classes.dialog + ' ' + classes.active}>
      <div className={classes.dialog_photo}>
        <img src='https://www.denofgeek.com/wp-content/uploads/2022/03/The-Batman-Pattinson.jpeg?fit=1600%2C1029'/>
      </div>
      <div className={classes.dialog_name}>
          <NavLink to={path} className={({ isActive }) => (isActive ? classes.activeLink.toString() : "")}>{props.name}</NavLink>
      </div>
    </div>
  )
}


