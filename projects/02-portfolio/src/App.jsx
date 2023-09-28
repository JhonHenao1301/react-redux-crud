import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import CarrerPath from './components/CarrerPath'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-center items-center font-link bg-slate-50'>
      <Navbar />
      <main className='flex flex-col items-center p-5 md:m-0 md:max-w-5xl md:justify-center'>
        <Home />
        <About />
        <CarrerPath />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
