import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Music } from './components/Menu/Music/Music';
import { Settings } from './components/Menu/Settings/Settings';
import { Menu } from './components/Menu/Menu';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Friends/UsersContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { NewsContainer } from './components/News/NewsContainer';
import { Login } from './components/Login/LoginContainer';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Preloader } from './components/common/preloader/Preloader';
import ProfileStore from './redux/redux-store';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux"
//import  ProfileContainer  from './components/Content/ContentContainer';
import { compose } from 'redux';
//import { EditContainer } from './components/Edit/EditContainer';
const ProfileContainer = React.lazy(() => import("./components/Content/ContentContainer"))//Lazy loading
const EditContainer = React.lazy(() => import("./components/Edit/EditContainer"))//Lazy loading

class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    else
      return (
        <div className="app-wrapper" >
          {
            this.props.userId 
            ?
            <>
              <HeaderContainer />
              <Menu />
              <div className='app-wrapper-content'>
                <Suspense fallback={<Preloader />}>
                  <Routes>
                    <Route path='/' element={<Navigate to="/profile" />} />
                    <Route path='/profile/:userId?' element={<ProfileContainer />} />
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route path='/friends' element={<UsersContainer />} />
                    {/*<Route path='/login' element={<Login />} />*/}
                    <Route path='/news' element={<NewsContainer />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/edit/:page?' element={<EditContainer />} />
                    <Route path='*' element={<ProfileContainer />} />
                  </Routes>
                </Suspense>
              </div>
            </>
            :
            <Login />
          }
        </div >
      );
  }
}

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

let mapStateToProps = (state) => ({
  initialized: state.AppPage.initialized,
  userId: state.AuthPage.userId,
})


let AppContainer = compose(connect(mapStateToProps, { initializeApp }),
  withRouter
)
  (App);


const NewAppJs = (props => {
  return <Provider store={ProfileStore}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
})


export default NewAppJs;