import React from 'react'
import { sendMessageCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import {connect} from "react-redux";
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';


let mapStateToProps = (state) => {//настраивает state для connect
  return {
    DialogsPage: state.DialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {//настраивает callback для connect
  return {
    SendMessage: (text) => {
      dispatch(sendMessageCreator(text))
    }
  }
}

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
  )(Dialogs)