import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

let mapStateToProps = (state) => ({
  isAuth: state.AuthPage.isAuth
})

export const withAuthNavigate = (Component) => {
  class NavigateComponent extends React.Component {
    render() {
      if(!this.props.isAuth) return <Navigate to={"/login"} />
      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthNavigateComponent = connect(mapStateToProps)(NavigateComponent);

  return ConnectedAuthNavigateComponent;
}



