import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import {connect} from "react-redux";
import { Navigate } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';


/*
export const DialogsContainer = (props) => {
  let state = props.store.getState()
const SendMessage = () => {
  props.store.dispatch(sendMessageCreator())
}
const MessageWriting = (text) => {
  props.store.dispatch(updateNewMessageTextCreator(text))
}
  return (
    <Dialogs state={state.DialogsPage} SendMessage={SendMessage} ChangeMessage={MessageWriting}/>
  )
}
*/


let AuthNavigateComponent = withAuthNavigate(Dialogs)


let mapStateToProps = (state) => {//настраивает state для connect
  return {
    DialogsPage: state.DialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {//настраивает callback для connect
  return {
    ChangeMessage: (text) => {
      dispatch(updateNewMessageTextCreator(text))
    },
    SendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent)

