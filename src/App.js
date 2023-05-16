import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Music } from './components/Menu/Music/Music';
import { News } from './components/Menu/News/News';
import { Settings } from './components/Menu/Settings/Settings';
import Header from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Friends/UsersContainer';
import { ProfileContainer } from './components/Content/ContentContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
    <HeaderContainer/>
      <Menu/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer/>}/> {/*/profile/:userId*/}
          {/*<Route path='*' element={<Content/>}/>*/}
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/friends' element={<UsersContainer/>}/>

          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
