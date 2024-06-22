import './App.css';
import Hero from './components/Hero/Hero'
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Join from './components/join/join'
import Footer from './components/footer/Footer';

function App() {
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
