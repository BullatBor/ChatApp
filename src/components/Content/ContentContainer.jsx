import React from 'react'
import axios from 'axios';
import { Content } from './Content'
import { connect } from 'react-redux';
import { setUserProfile, setLoader } from '../../redux/profileReducer';
import { Preloader } from '../common/preloader/Preloader';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileAPI } from '../../api/api';

class ContentContainer extends React.Component {
    componentDidMount(){    
      let userId = this.props.router.params.userId;
      if(!userId) userId = 2;
      profileAPI.getProfileInfo(userId).then(data => {
        this.props.setUserProfile(data);
        this.props.setLoader(false);
})
    }
    render(){
        return <>
            {
                this.props.isFetching
                ?
                <Preloader/>
                :
                <Content {...this.props} profile={this.props.profile}/>
            }
            </>
            
    }
 
}

const mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isFetching: state.ProfilePage.isFetching
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

export let ProfileContainer = connect(mapStateToProps, {setUserProfile, setLoader})(withRouter(ContentContainer))
