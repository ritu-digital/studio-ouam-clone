import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Hero />
        <Services />
        <Work />
      </BrowserRouter>
    </div>
  );
}

export default App;
