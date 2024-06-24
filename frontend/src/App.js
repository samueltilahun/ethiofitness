import './App.css';
import Hero from './components/Hero/Hero'
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Join from './components/join/join'
import Footer from './components/footer/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
