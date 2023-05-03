import React, { useContext } from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import { Dialogs } from './Dialogs';



export const DialogsContainer = () => {
  const store = useContext(StoreContext)
  let state = store.getState();
  const SendMessage = () => {
  store.dispatch(sendMessageCreator())
}
const MessageWriting = (text) => {
  store.dispatch(updateNewMessageTextCreator(text))
}
  return (
    <Dialogs state={state.DialogsPage} SendMessage={SendMessage} ChangeMessage={MessageWriting}/>
  )
}
