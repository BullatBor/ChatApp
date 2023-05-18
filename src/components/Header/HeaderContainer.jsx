import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { AuthThunkCreator } from '../../redux/authReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";



class HeaderClass extends React.Component {
  componentDidMount(){
    this.props.AuthThunkCreator(this.props.router.params.userId)
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

export let HeaderContainer = connect(mapStateToProps, {AuthThunkCreator})(withRoute(HeaderClass));
