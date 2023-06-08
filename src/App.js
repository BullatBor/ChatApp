import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Music } from './components/Menu/Music/Music';
import { Settings } from './components/Menu/Settings/Settings';
import { Menu } from './components/Menu/Menu';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Friends/UsersContainer';
import { ProfileContainer } from './components/Content/ContentContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { NewsContainer } from './components/News/NewsContainer';
import { Login } from './components/Login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Preloader } from './components/common/preloader/Preloader';

class App extends React.Component {//Делаю чтобы меню пропадало при входе без логина, файл MainPage
  componentDidMount() {
    this.props.initializeApp(this.props.router.params.userId)
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader />
    }
    else
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Menu />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer />} /> {/*/profile/:userId*/}
            {/*<Route path='*' element={<Content/>}/>*/}
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/friends' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/news' element={<NewsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
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


export default connect(mapStateToProps, { initializeApp })(withRoute(App));
