import React from 'react'
import { Content } from './Content'
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/profileReducer';
import { Preloader } from '../common/preloader/Preloader';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

class ContentContainer extends React.Component {
    componentDidMount(){    
      this.props.getProfileThunkCreator(this.props.router.params.userId)
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


let AuthNavigateComponent = withAuthNavigate(ContentContainer)//HOC


const mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isFetching: state.ProfilePage.isFetching,
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

export let ProfileContainer = connect(mapStateToProps, {getProfileThunkCreator})(withRouter(AuthNavigateComponent))
