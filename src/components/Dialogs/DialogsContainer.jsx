import React from 'react'
import { sendMessageCreator, getDialogsThunkCreator } from '../../redux/dialogsReducer';
import { getProfileThunkCreator } from '../../redux/profileReducer';
import { Dialogs } from './Dialogs';
import {connect} from "react-redux";
import { compose } from 'redux';
import {getUsersThunkCreator} from "../../redux/usersReducer"
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class DialogClass extends React.Component {
  render(){
    return <Dialogs {...this.props}/>
  }
}


let mapStateToProps = (state) => {//настраивает state для connect
  return {
    profile: state.ProfilePage.profile,
    DialogsPage: state.DialogsPage,
    users: state.UsersPage.users,
    isFetching: state.ProfilePage.isFetching
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

export const DialogsContainer = compose(
  connect(mapStateToProps, {sendMessageCreator, getDialogsThunkCreator, getUsersThunkCreator, getProfileThunkCreator}),
  withRouter
  )(DialogClass)