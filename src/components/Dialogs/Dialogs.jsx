import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import { DialogsSearch } from './DialogSearch/Dialogs';
import { DialogItem } from './DialogsItem/DialogItem';
import { FriendsSlide } from './FriendsSlide/FriendsCarousel';
import { Message } from './MessageItem/Message';



export const Dialogs = (props) => {

  return (
    <div className={classes.dialogs}>
      <div>
          <DialogsSearch/>
          <FriendsSlide state={props.state}/>
          <div className={classes.dialogsItems}>
          {props.state.Dialogs.map((item) => {
            return <DialogItem key={item.id} id={item.id} name={item.name}/>
          })
        }
        </div>       
          {/*
        <div className={classes.dialogsItems}>
          <DialogItem id='1' name={"Эрдэм"}/>
          <DialogItem id='2' name={"Тимур"}/>
          <DialogItem id='3' name={"Даши"}/>
        </div>
  */}
      </div>
      <div className={classes.messages}>
        <div className={classes.NavName}>
            <div>
              Имя собеседника
            </div>
        </div>
        {props.state.Messages.map(item => {
          return <Message key={item.id} message={item.message}/>
        })}
      </div>
    </div>
  )
}
