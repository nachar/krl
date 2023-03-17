import HeaderNav from '../HeaderNav/HeaderNav';
import HeroComponent from '../HeroComponent/HeroComponent';
import BandProducts from '../BandProducts/BandProducts';
import IntroMessage from '../IntroMessage/IntroMessage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden-focusable">KRL Producciones</h1>
      <HeaderNav />
      <HeroComponent />
      <IntroMessage />
      <BandProducts />
    </div>
  );
}

export default App;
