import './App.css';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';


function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-section">
        <Hero />
        <Projects />
      </main>

    </>
  );
}

export default App;
