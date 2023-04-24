import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'

export const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return(
    <div className={classes.dialog + ' ' + classes.active}>
      <div className={classes.dialog_photo}>
        <img src='https://pictureholiday.ru/wp-content/uploads/2018/05/2.jpg'/>
      </div>
      <div className={classes.dialog_name}>
          <NavLink to={path} className={({ isActive }) => (isActive && classes.activeLink)}>{props.name}</NavLink>
      </div>
    </div>
  )
}


