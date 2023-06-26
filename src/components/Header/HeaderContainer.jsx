import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { LogoutThunkCreator } from '../../redux/authReducer';
import { getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator } from '../../redux/profileReducer';




class HeaderClass extends React.Component {
componentDidMount() {
  
}
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
    userId: state.AuthPage.userId,
  }
}



export let HeaderContainer = connect(mapStateToProps, { LogoutThunkCreator, getProfileThunkCreator})(HeaderClass);
