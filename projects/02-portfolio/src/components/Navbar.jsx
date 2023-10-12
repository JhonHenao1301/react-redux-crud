import { useState } from "react";
import Switcher from "./Switcher";

export default function Navbar() {
    const [open,setOpen] = useState(false);
    return (
        <nav className="dark:bg-slate-900 dark:opacity-90 dark:text-slate-100 bg-indigo-200 opacity-80 w-full sticky top-0 left-0 z-20 shadow-sm text-slate-950">
            <div className="flex items-center py-4 md:px-8 px-8 justify-between"> 
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <span className="text-3xl mr-1 pt-2 text-indigo-600 dark:text-indigo-300">
                        <ion-icon size="large" name="code-working-outline"></ion-icon>
                    </span>
                    JH
                </div>

                <div 
                    onClick={()=>setOpen(!open)} 
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    <ion-icon size="large" name={open ? 'close':'menu'}>
                    </ion-icon>
                </div>

                <div>
                    <ul className={`navbar-ul ${open ? 'top-20 ': 'top-[-490px]'}`}>
                        {[
                            {name:'Home', link:'#home'},
                            {name:'About', link:'#about'},
                            {name:'Carrer path', link: '#carrer'},
                            {name:'Projects', link: '#projects'},
                            {name:'Contact', link:'#contact'},
                        ].map(({name, link}, index) => (
                            <li className="navbar-li" key={index}>
                                <a href={link} className="navbar-link dark:navbar-link-dark rounded-lg font-medium duration-500" onClick={()=>setOpen(!open)}>
                                    {name}
                                </a>
                            </li>
                        ))}
                        <li className="navbar-li">
                            <Switcher />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
