import { Route, Routes } from 'react-router-dom';
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

//import { ProfileContainer } from './components/Content/ContentContainer';
const ProfileContainer = React.lazy(() => import("./components/Content/ContentContainer"))//Lazy loading


class App extends React.Component {//Делаю чтобы меню пропадало при входе без логина, файл MainPage
  componentDidMount() {
    this.props.initializeApp(this.props.router.params.userId)
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    else
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Menu />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader/>}>
              <Routes>
                <Route path='/profile/:userId?' element={<ProfileContainer />} />
                {/*<Route path='*' element={<Content/>}/>*/}
                <Route path='/dialogs' element={<DialogsContainer />} />
                <Route path='/friends' element={<UsersContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/news' element={<NewsContainer />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      );
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

let mapStateToProps = (state) => ({
  initialized: state.AppPage.initialized
})


let AppContainer = connect(mapStateToProps, { initializeApp })(withRoute(App));


const NewAppJs = (props => {
  return <Provider store={ProfileStore}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
})


export default NewAppJs;