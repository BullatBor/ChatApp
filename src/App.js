import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Content } from './components/Content/Content';
import { Music } from './components/Menu/Music/Music';
import { News } from './components/Menu/News/News';
import { Settings } from './components/Menu/Settings/Settings';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Menu/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Content store={props.store}/>
          }/>
          {/*<Route path='*' element={<Content/>}/>*/}
          <Route path='/dialogs' element={<DialogsContainer store={props.store}/>}/>
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
