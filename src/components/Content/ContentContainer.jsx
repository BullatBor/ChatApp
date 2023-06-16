import React from 'react'
import { Content } from './Content'
import { connect } from 'react-redux';
import { getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator } from '../../redux/profileReducer';
import { Preloader } from '../common/preloader/Preloader';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

class ContentContainer extends React.Component {
    componentDidMount(){    
      this.props.getProfileThunkCreator(this.props.router.params.userId || this.props.userId)
      this.props.getProfileStatusThunkCreator(this.props.router.params.userId || this.props.userId)
    }
    render(){      
        return <>
            {
                this.props.isFetching
                ?
                <Preloader/>
                :
                <Content {...this.props} />
            }
            </>
            
    }
 
}

const mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isFetching: state.ProfilePage.isFetching,
    status: state.ProfilePage.status,
    userId: state.AuthPage.userId,
    avatar: state.ProfilePage.AvatarImg
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
    connect(mapStateToProps, {getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator}),    
    withAuthNavigate,
    withRouter
)(ContentContainer)

export default ProfileContainer
