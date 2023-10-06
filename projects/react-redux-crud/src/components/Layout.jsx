
import CreateNewUser from "./CreateNewUser";
import Navbar from "./Navbar";
import UserList from "./UserList";


export default function Layout () {
    return ( 
        <div className="flex flex-col gap-4 px-8">
            <Navbar />
            <UserList />
            <CreateNewUser />
        </div>
    )
}