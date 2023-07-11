import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import EditProfile from './EditProfile';
import classes from './Edit.module.css';
import { getProfileThunkCreator, getProfileStatusThunkCreator, saveProfileThunkCreator, updateProfileStatusThunkCreator } from "../../redux/profileReducer"
import { Preloader } from '../common/preloader/Preloader';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { EditMenu } from './EditMenu';
import EditContacts from './EditContacts';





class EditClass extends React.Component {
  componentDidMount() {
    this.props.getProfileStatusThunkCreator(this.props.userId)
    this.props.getProfileThunkCreator(this.props.userId)    
  }

  render() {
    if (this.props.profile !== null) {
      return (
        <div className={classes.main}>
          <div className={classes.leftColumn}>
            {
              this.props.router.params.page === "contactsEdit" ? 
              <EditContacts {...this.props} saveProfile={this.props.saveProfileThunkCreator} 
              getProfileInfo={this.props.getProfileThunkCreator} getProfileStatus={this.props.getProfileStatusThunkCreator}
              userId={this.props.userId}
              /> 
              : 
              <EditProfile defaultPhoto={this.props.defaultPhoto} profile={this.props.profile} status={this.props.status}
              saveProfile={this.props.saveProfileThunkCreator} updateStatus={this.props.updateProfileStatusThunkCreator}
              getProfileInfo={this.props.getProfileThunkCreator} getProfileStatus={this.props.getProfileStatusThunkCreator}
              userId={this.props.userId}
              />
            }
          </div>
          <div className={classes.rightColumn}>
            <EditMenu />
          </div>
        </div>
      ) 
    }
    else {
      return <Preloader />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.AuthPage.isFetching,
    defaultPhoto: state.ProfilePage.AvatarImg,
    profile: state.ProfilePage.profile,
    userId: state.AuthPage.userId,
    status: state.ProfilePage.status
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

let EditContainer = connect(mapStateToProps, { getProfileThunkCreator, getProfileStatusThunkCreator, 
  saveProfileThunkCreator, updateProfileStatusThunkCreator })
  (withRoute(EditClass));

export default EditContainer;
