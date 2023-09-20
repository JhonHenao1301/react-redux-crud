import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import CarrerPath from './components/CarrerPath'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <div className='font-link'>
      <Navbar />
      <main className='flex flex-col gap-20 py-8 px-8 bg-slate-100 md:m-auto md:max-w-4xl'>
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
