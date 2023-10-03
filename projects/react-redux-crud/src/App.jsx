import './App.css'
import CreateNewUser from './components/CreateNewUser'
import UserList from './components/UserList.JSX'

function App() {

return (
    <div className='flex flex-col gap-4'>
      <UserList />
      <CreateNewUser />
    </div>
  )
}

export default App