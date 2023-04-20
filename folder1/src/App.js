
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { Menu } from './components/Menu';

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
