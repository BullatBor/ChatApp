
import './App.css';
import { Content } from './components/Content/Content';
import Header from './components/Header/Header';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Menu/>
      <Content/> 
    </div>
  );
}

export default App;
