import './App.css'
import HeroImg from './assets/hero-img.png'

function App() {


  return (
  
      <section id="hero">
        <div className="hero-container">

          <div>
            <h1 className="main-heading"><p className="highlight">Hej, Lina heter jag!</p>En multitasker som älskar design, webb och tillgänglighet</h1>
          </div>
          <div>
            <img src={HeroImg} alt="hero-img" className="hero-img" />
          </div>
        </div>
      </section>
   

    
  )
}

export default App
