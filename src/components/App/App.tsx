import HeaderNav from '../HeaderNav/HeaderNav';
import HeroComponent from '../HeroComponent/HeroComponent';
import BandProducts from '../BandProducts/BandProducts';
import IntroMessage from '../IntroMessage/IntroMessage';
import BandMembers from '../BandMembers/BandMembers';
import ContactForm from '../ContactForm/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden-focusable">KRL Producciones</h1>
      <HeaderNav />
      <HeroComponent />
      <IntroMessage />
      <BandProducts />
      <BandMembers />
      <ContactForm />
    </div>
  );
}

export default App;
