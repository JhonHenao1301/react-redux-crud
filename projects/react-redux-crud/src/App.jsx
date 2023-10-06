import './App.css'
import EditUser from './components/EditUser'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {

return (
    <div className='flex flex-col gap-4 bg-slate-100 dark:bg-slate-600 dark:text-slate-200'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App