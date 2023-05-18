import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const withAuthNavigate = ( Component ) => {

  class NavigateComponent extends React.Component {
    render() {
        if(!this.props.isAuth) return <Navigate to={"/login"} />

        return <Component {...this.props} />
    }
  }

  const mapStateToPropsForNavigate = (state) => ({
    isAuth: state.AuthPage.isAuth
})


let ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)

  return NavigateComponent;
}
