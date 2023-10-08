
import CreateNewUser from "./CreateNewUser";
import Navbar from "./Navbar";
import { UserList } from "./UserList";
import { Toaster } from 'sonner'

export default function Layout () {
    return ( 
        <div className="flex flex-col gap-4 px-8">
            <Navbar />
            <UserList />
            <CreateNewUser />
            <Toaster richColors />
        </div>
    )
}