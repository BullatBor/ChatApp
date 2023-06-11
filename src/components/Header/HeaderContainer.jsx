import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';
import { setUserData } from '../../redux/authReducer';
import { setUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileAPI } from '../../api/api';
import { authAPI } from '../../api/api';


class HeaderClass extends React.Component {
  componentDidMount(){
    authAPI.auth().then(data => {
      if(data.resultCode === 0) {
        let userId = this.props.router.params.userId;
        if(!userId) userId = 2;
        profileAPI.getProfileInfo(userId).then(data => {
          this.props.setUserProfile(data);
          })
        let {id, email, login} = data.data;
        this.props.setUserData(id, email, login)
      }      
  })
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
    avatar: state.ProfilePage.AvatarImg
  }
}

function withRoute(Component) {
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

export let HeaderContainer = connect(mapStateToProps, {setUserData, setUserProfile})(withRoute(HeaderClass));
