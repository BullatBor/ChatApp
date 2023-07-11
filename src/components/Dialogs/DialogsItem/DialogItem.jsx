import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'
import defaultPhoto from "../../../assets/ava.png"

export const DialogItem = (props) => {
  return (
    <NavLink to={'/dialogs/' + props.id } className={classes.userLink}>
      <div className={classes.dialog + ' ' + classes.active}>
        <div className={classes.dialog_photo}>
          <img src={props.img || defaultPhoto} />
        </div>
        <div className={classes.dialogName}>
          <span>{props.name}</span>
        </div>
      </div>
    </NavLink>
  )
}


