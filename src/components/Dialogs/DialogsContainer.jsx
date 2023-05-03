import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';



export const DialogsContainer = (props) => {
  let state = props.DialogsPage
const SendMessage = () => {
  props.store.dispatch(sendMessageCreator())
}
const MessageWriting = (text) => {
  props.store.dispatch(updateNewMessageTextCreator(text))
}
  return (
    <Dialogs state={state} SendMessage={SendMessage} ChangeMessage={MessageWriting}/>
  )
}
