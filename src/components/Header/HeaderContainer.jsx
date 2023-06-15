import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { LogoutThunkCreator } from '../../redux/authReducer';




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
    avatar: state.ProfilePage.AvatarImg,
  }
}



export let HeaderContainer = connect(mapStateToProps, {LogoutThunkCreator})(HeaderClass);
