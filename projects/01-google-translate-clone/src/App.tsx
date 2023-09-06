import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App() {
  const { setFromLanguage, fromLanguage } = useStore()
  return (
    <div>
      <h1>React</h1>
      <p>Hi</p>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Change</button>
      <p>
        { fromLanguage }
      </p>
    </div>
  )
}

export default App
