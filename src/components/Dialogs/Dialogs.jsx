import React from 'react'
import classes from './Dialogs.module.css'
import { DialogsSearch } from './DialogSearch/Dialogs';
import { DialogItem } from './DialogsItem/DialogItem';
import { FriendsSlide } from './FriendsSlide/FriendsCarousel';
import { Message } from './MessageItem/Message';



export const Dialogs = (props) => {
const onSendMessage = () => {
  props.SendMessage()
}
const MessageWriting = (e) => {
  let text = e.target.value;
  props.ChangeMessage(text)
}
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
        <div className={classes.messageList}>
          {props.state.Messages.map(item => {
            return <Message key={item.id} message={item.message}/>
          })}
        </div>
        <div className={classes.MessageInputBlock}>
            <div className={classes.MessageInput}>
              <div className={classes.MessageInputItem}>
                <input className={classes.SearchInput} 
                onChange={MessageWriting}
                value={props.state.newMessageText}
                placeholder="Введите сообщение"
                >
                </input>  
              </div>  
              <button onClick={onSendMessage}>отправить</button>  
            </div>            
        </div>

      </div>
    </div>
  )
}
