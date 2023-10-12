import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import CarrerPath from './components/CarrerPath'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

export default function App() {

  return (
    <div className='main-layout'>
      <Navbar />
      <Layout>
        <Home />
        <About />
        <CarrerPath />
        <Projects />
        <Contact />
      </Layout>
    </div>
  )
}


