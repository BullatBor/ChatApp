import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Music } from './components/Menu/Music/Music';
import { Settings } from './components/Menu/Settings/Settings';
import { Menu } from './components/Menu/Menu';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Friends/UsersContainer';
import { ProfileContainer } from './components/Content/ContentContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { NewsContainer } from './components/News/NewsContainer';
import { Login} from './components/Login/LoginContainer';

function App() {//Делаю чтобы меню пропадало при входе без логина, файл MainPage
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
          <Route path='/login' element={<Login/>}/>
          <Route path='/news' element={<NewsContainer/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
