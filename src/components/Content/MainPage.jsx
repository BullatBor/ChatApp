import { Route, Routes } from 'react-router-dom';
import classes from './Content.module.css'
import { Music } from '../Menu/Music/Music';
import { News } from '../Menu/News/News';
import { Settings } from '../Menu/Settings/Settings';
import { Menu } from '../Menu/Menu';
import { DialogsContainer } from '../Dialogs/DialogsContainer';
import { UsersContainer } from '../Friends/UsersContainer';
import { ProfileContainer } from '../Content/ContentContainer';
import { Login } from '../Login/Login';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

export const MainPage = () => {
  return (
    <>
      <Menu/>
        <div className={classes.wrapper}>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer/>}/> {/*/profile/:userId*/}
          {/*<Route path='*' element={<Content/>}/>*/}
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/friends' element={<UsersContainer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes> 
      </div>      
    </>
  );
}


let AuthNavigateComponent = withAuthNavigate(MainPage)//HOC


export let MainPageContainer = connect()(AuthNavigateComponent)
