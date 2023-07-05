import React from 'react'
import { Content } from './Content'
import { connect } from 'react-redux';
import { getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator, saveProfilePhotoThunkCreator, addPhotoInAlbum } from '../../redux/profileReducer';
import { getUsersThunkCreator } from "../../redux/usersReducer"
import { Preloader } from '../common/preloader/Preloader';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

class ContentContainer extends React.Component {

    refreshProfile() {
        this.props.getProfileThunkCreator(this.props.router.params.userId || this.props.userId)
        this.props.getProfileStatusThunkCreator(this.props.router.params.userId || this.props.userId)
    }

    componentDidMount() {
        this.refreshProfile();
        this.props.getUsersThunkCreator(2, 4, true);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }
    render() {
        return <>
            {
                this.props.isFetching
                    ?
                    <Preloader />
                    :
                    <Content
                        isOwner={!this.props.router.params.userId}
                        savePhoto={this.props.saveProfilePhotoThunkCreator}
                        {...this.props} />
            }
        </>

    }

}

const mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isFetching: state.ProfilePage.isFetching,
    status: state.ProfilePage.status,
    userId: state.AuthPage.userId,
    avatar: state.ProfilePage.AvatarImg,
    photoAlbum: state.ProfilePage.photoAlbum,
    friends: state.UsersPage.users
})

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

let ProfileContainer = compose(
    connect(mapStateToProps, {
        getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator,
        saveProfilePhotoThunkCreator, addPhotoInAlbum, getUsersThunkCreator
    }),
    withAuthNavigate,
    withRouter
)(ContentContainer)

export default ProfileContainer
