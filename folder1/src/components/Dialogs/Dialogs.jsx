import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
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
const DialogsSearch = () => {
  return(
    <div className={classes.searchBlock}>
      <input placeholder='Поиск'></input>
    </div>
  )
}

const Message = (props) => {
  return(
    <div className={classes.message}>{props.message}</div>
  )
}

export const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div>
          <DialogsSearch/>
        <div className={classes.dialogsItems}>
          <DialogItem id='1' name={"Эрдэм"}/>
          <DialogItem id='2' name={"Тимур"}/>
          <DialogItem id='3' name={"Даши"}/>
        </div>
      </div>
      <div className={classes.messages}>
          <Message message='Hi'/>
          <Message message='How are you?'/>
          <Message message='Hello'/>
      </div>
    </div>
  )
}
