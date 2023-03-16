import HeaderNav from '../HeaderNav/HeaderNav';
import HeroComponent from '../HeroComponent/HeroComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden-focusable">KRL Producciones</h1>
      <HeaderNav />
      <HeroComponent />
    </div>
  );
}

export default App;
