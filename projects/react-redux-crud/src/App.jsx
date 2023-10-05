import './App.css'
import EditUser from './components/EditUser'
import UserList from './components/UserList'
import { Routes, Route } from 'react-router-dom'

function App() {

return (
    <div className='flex flex-col gap-4'>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App