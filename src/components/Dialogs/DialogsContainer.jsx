import React from 'react'
import { sendMessageCreator, getDialogsThunkCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import {connect} from "react-redux";
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import {getUsersThunkCreator} from "../../redux/usersReducer"


let mapStateToProps = (state) => {//настраивает state для connect
  return {
    DialogsPage: state.DialogsPage,
    users: state.UsersPage.users
  }
}

export const DialogsContainer = compose(
  connect(mapStateToProps, {sendMessageCreator, getDialogsThunkCreator, getUsersThunkCreator}),
  withAuthNavigate
  )(Dialogs)