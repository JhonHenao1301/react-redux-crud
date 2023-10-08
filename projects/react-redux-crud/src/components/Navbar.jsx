
import Switcher from './Switcher'

export function Navbar () {
    return ( 
        <nav className="flex content-center justify-between top-0 h-16 px-6 py-4"
        >
            <h1 className='font-bold'>Crud with Redux</h1>
            <Switcher />
        </nav>
    )
}