import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { LogoutThunkCreator } from '../../redux/authReducer';
import { getProfileThunkCreator } from '../../redux/profileReducer';




class HeaderClass extends React.Component {
  render(){
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.AuthPage.isAuth,
    login: state.AuthPage.login,
    isFetching: state.AuthPage.isFetching,
    defaultPhoto: state.ProfilePage.AvatarImg,
    profile: state.ProfilePage.profile
  }
}



export let HeaderContainer = connect(mapStateToProps, { LogoutThunkCreator })(HeaderClass);
